const express = require('express');
const uuidv4 = require('uuid');
const ExpressRedisCache = require('express-redis-cache/lib/ExpressRedisCache');

const bluebird = require('bluebird');
bluebird.promisifyAll(ExpressRedisCache.prototype);

const redisClient = ExpressRedisCache.init({ host: `${process.env.REDIS}`, port: 6379, prefix: "mobile-transaction-" })

const transactionApis = require('../statics/transactions');

async  function getAsync(key) {

    let cacheData = undefined;

    let caheEntities = await redisClient.getAsync(key);
    if (caheEntities.length === 1) {
        cacheData = JSON.parse(caheEntities[0].body);
    }

    if (cacheData) {
        cacheData = JSON.parse(JSON.stringify(cacheData));
    }
    return cacheData;
}

async function setAsync(key, data) {
    await redisClient.addAsync(key, JSON.stringify(data));
    return data;
}

async function deleteAsync(key) {
    await redisClient.delAsync(key);
}

/*async function beginTransaction(req, res, next) {
    if (req.session) {
        try {


            const transactionAllQuery = new Parse.Query("TransactionModel");
            transactionAllQuery.equalTo("sessionToken", req.session.sessionToken);
            let transactionAlls = await transactionAllQuery.find({ useMasterKey: true });
            await Parse.Object.destroyAll(transactionAlls, { useMasterKey: true });

            const currentTransactionKey = `${req.baseUrl.split("/").map(item => item.trim()).filter(item => item !== "").join(":")}:${uuidv4.v4()}`;
            const transactionIdDummy = uuidv4.v1();
            const transaction = new Parse.Object("TransactionModel");
            transaction.set('sessionToken', req.session.sessionToken);
            transaction.set('currentTransactionKey', currentTransactionKey);
            transaction.set('tempCurrentTransactionKey', req.headers['temp-current-transaction-key'])
            transaction.set('transactionIdDummy', transactionIdDummy);
            transaction.set('transactionId', '503')

            await transaction.save(null, { useMasterKey: true });



            res.send({
                currentTransactionKey,
                transactionId: transactionIdDummy
            });



        } catch (error) {
            next(error);
        }
    }
}*/

async function commitTransaction(req, res, next) {
    if (req.session) {
        try {
            await deleteAsync(`mobile-transaction-${req.session.user.id}-${req.headers['current-transaction-key']}`);
            res.send({
                restHeader: {
                    success: true
                },
            });

        } catch (error) {
            next(error);
        }
    }
}

async function beforeReuqestMiddleware(req, res, next) {
    if (req.session) {
        if (req.headers['current-transaction-key']) {
            req.session.currentTransactionKey = req.headers['current-transaction-key'];
        } else {
            req.session.currentTransactionKey = "";
        }

        if (!["/transaction-begin", "/transaction-end"].includes(req.url) && ((req.session.currentTransactionKey && req.method !== "OPTIONS") || transactionApis[req.baseUrl].startApi.includes(req.url))) {
            try {


                if (!req.session.currentTransactionKey && transactionApis[req.baseUrl].startApi.includes(req.url)) {
                    await deleteAsync(`mobile-transaction-${req.session.user.id}-*`);

                    const currentTransactionKey = `${req.baseUrl}:${uuidv4.v4()}`;

                    await setAsync(`mobile-transaction-${req.session.user.id}-${currentTransactionKey}`, {});

                    req.headers['current-transaction-key'] = currentTransactionKey;
                    req.webClient.addHeader('current-transaction-key', currentTransactionKey);
                    req.state = { model: {} }
                }
                else {

                    const transactionModel = await getAsync(`mobile-transaction-${req.session.user.id}-${req.headers['current-transaction-key']}`);
                    if (transactionModel) {
                        req.state = transactionModel;
                        if (req.state.operationDone && !(req.url.indexOf('quickSave') > -1))
                            throw new Error('Tamamlanmış işlemdir. Yeni işlem başlatınız.');

                    }

                    else throw new Error('Transaction başlatılmamış, yetkiniz bulunmamaktadır');
                }


                const sender = res.send;
                const transactionPath = req.url;
                res.send = async (body) => await afterResponseMiddleware(req, res, next, body, sender, transactionPath);
                next();
            } catch (error) {
                next(error);
            }
        } else {
            next();
        }
    }
}

async function afterResponseMiddleware(req, res, next, body, sender, transactionPath) {
    if (req.session) {
        try {
            let transactionModel = await getAsync(`mobile-transaction-${req.session.user.id}-${req.headers['current-transaction-key']}`);

            if (transactionModel) {
                setAsync(`mobile-transaction-${req.session.user.id}-${req.headers['current-transaction-key']}`, req.state)
            }

            res.setHeader('current-transaction-key', req.headers['current-transaction-key']);
            sender.call(res, body);
        } catch (error) {
            next(error);
        }
    }
}

function Router(options) {
    const opts = options || {};
    const router = express.Router(opts);

    router.use(beforeReuqestMiddleware);
    //router.get("/transaction-begin", beginTransaction);
    router.get("/transaction-end", commitTransaction);

    router.init = () => {
        router.all("*", async function (req, res) {
            res.send({
                restHeader: {
                    success: true
                },
                session: req.session
            });
        });
    };

    return router;
}

module.exports = Router;
