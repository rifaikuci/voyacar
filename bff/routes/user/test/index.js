var express = require('express');
var router = express.Router();



router.get("/", async function (req, res, next) {
    try {

        await req.cache.setAsync('test1', {user:'mehmet', mail:'monderable'}, 30);
        await req.cache.setAsync('test2', {user:'mevlut', mail:'xxxx'});


        let data =  await req.cache.getAsync('test1');
        data =  await req.cache.getAsync('test1');
        data =  await req.cache.getAsync('test2');
         data = await req.cache.getAsync('test');
        await req.cache.deleteAsync('test');
        res.send({
            restHeader: { success: true },
            responseObject: {user:'test'}
        });
    } catch (e) {
        nextErr(e);
    }
})

module.exports = router;
