let inMemoryCache = {};

const ExpressRedisCache = require('express-redis-cache/lib/ExpressRedisCache');

const bluebird = require('bluebird');
bluebird.promisifyAll(ExpressRedisCache.prototype);

const redisClient = ExpressRedisCache.init({ host: `${process.env.REDIS}`, port: 6379, prefix: "mobile-cache-" })

redisClient.on("error", (error) => {
    console.error('Redise Bağlanamadı ->' + error);
});

async function getAsync(key) {

    let cacheData = undefined;
    /*if (Object.keys(inMemoryCache).includes(key)) {
        cacheData = inMemoryCache[key];
    } else {*/
        let caheEntities = await redisClient.getAsync(key);
        if (caheEntities.length === 1) {
            cacheData = JSON.parse(caheEntities[0].body);
            //inMemoryCache[key] = cacheData;
        }
    //}

    if (cacheData) {
        cacheData = JSON.parse(JSON.stringify(cacheData));
    }
    return cacheData;
}

async function setAsync(key, data, expire = 1200) {

    //inMemoryCache[key] = data;
    await redisClient.addAsync(key, JSON.stringify(data), {expire});

    return data;
}

async function deleteAsync(key) {
    //inMemoryCache[key] = undefined;
    await redisClient.delAsync(key);
}

function createCacheMiddleware(req, res, next) {

    req.cache = {
        getAsync,
        setAsync,
        deleteAsync
    };

    next();
}


module.exports.createCacheMiddleware = createCacheMiddleware;
