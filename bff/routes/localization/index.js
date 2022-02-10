const express = require('express');
const router = express.Router();
const i18next = require('i18next');
const _ = require('lodash');
const mongoose = require('mongoose');
const moment = require("moment");

mongoose.connect(`mongodb://${process.env.BACKEND}:27017/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.error('Mongo connection error : ', err) : console.log('Mongo connected'));

const ResourceSchema = new mongoose.Schema({
    module: { type: String, required: true, unique: true },
    lang: { type: String, required: true, enum: ['tr-TR', 'en-US', 'nl-NL'] },
    key: { type: String, required: true, unique: true },
    description: { type: String, required: false, unique: false, default: "" },
    value: { type: Object, required: true },
    insertUser: { type: String, required: true, default: "auto" },
    insertDate: { type: Date, required: true, default: Date.now },
    updateUser: { type: String, required: true, default: "auto" },
    updateDate: { type: Date, required: true, default: Date.now }
});
ResourceSchema.index({ moduleName: 1, lang: 1, key: 1 }, { unique: true });
const ResourceModel = mongoose.model("ResourceSchema", ResourceSchema, "ResourceCollection");

let resourceDocument = [];
ResourceModel.find({ module: 'mobile', key: 'mobile' }, (err, doc) => {
    if (err) {
        console.error("Resource data not founded", err);
    } else {
        i18next.init({
            ns: ['mobile'],
            defaultNS: 'mobile',
            fallbackNS: 'mobile'
        });
        i18next.changeLanguage("nl-NL");

        resourceDocument = doc;
        const groupedResource = _.groupBy(doc, (item) => item.lang);
        for (const lang in groupedResource) {
            const values = groupedResource[lang];
            for (const data of values) {
                i18next.addResourceBundle(lang, data.module, { [data.key]: data.value }, data.description);
            }
        }

        console.log("Resource data initialized");
    }
});


router.get('/refresh', async function (req, res, next) {
    ResourceModel.find({ module: 'mobile' }, (err, doc) => {
        if (err) {
            console.error("Resource data not founded", err);
        } else {
            i18next.init({
                ns: ['mobile'],
                defaultNS: 'mobile',
                fallbackNS: 'mobile'
            });
            i18next.changeLanguage("nl-NL");

            resourceDocument = doc;
            const groupedResource = _.groupBy(doc, (item) => item.lang);
            for (const lang in groupedResource) {
                const values = groupedResource[lang];
                for (const data of values) {
                    i18next.addResourceBundle(lang, data.module, { [data.key]: data.value }, data.description);
                }
            }

            res.send({
                restHeader: { success: true },
                responseObject: resourceDocument
            });
        }
    });
    res.send({
        restHeader: { success: true },
        responseObject: resourceDocument
    });
});

router.get('/', async function (req, res, next) {

    let returnValue = {};
    const groupedResource = _.groupBy(resourceDocument, (item) => item.lang);
    for (const lang in groupedResource) {
        returnValue[lang] = {};
        const values = groupedResource[lang];
        for (const data of values) {
            returnValue[lang][data.key] = data.value
        }
    }

    res.send({
        restHeader: { success: true },
        responseObject: returnValue
    });
});



function createLocalizationMiddleware() {
    function text(innerInstance, key, defaultValue = "") {
        if (innerInstance.exists(key)) {
            return innerInstance.t(key);
        }

        return defaultValue;
    }

    function textWithFormatted(innerInstance, key, valuesObject, defaultValue = "") {

        let keys = Object.keys(valuesObject);

        for (const key of keys) {
            if (valuesObject[key] instanceof Date) {
                valuesObject[key] = moment(valuesObject[key]).format("DD-MM-YYYY HH:MM")
            }
        }

        if (innerInstance.exists(key)) {
            return innerInstance.t(key, valuesObject);
        }

        return defaultValue;
    }

    function middleware(req, res, next) {
        const innerInstance = i18next.cloneInstance();
        try {
            innerInstance.changeLanguage(req.body.lang || req.user.lang);
        } catch (e) {
            innerInstance.changeLanguage('nl-NL');
        }
        req.localization = {
            t: innerInstance.t,
            text: (key, defaultValue = "") => text(innerInstance, key, defaultValue),
            textWithFormatted: (key, values, defaultValue = "") => textWithFormatted(innerInstance, key, values, defaultValue),
        };

        next();
    }

    return middleware;
}

module.exports.service = router;
module.exports.localizationMiddleware = createLocalizationMiddleware;
