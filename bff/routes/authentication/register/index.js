var express = require('express');
var router = express.Router();
const axios = require('axios');
var jwt = require('jsonwebtoken')
const fs   = require('fs');

router.post("/", async function (req, res, next) {
    try {

        var privateKEY  = fs.readFileSync('./keys/private.pem', 'utf8');
        const token = jwt.sign(

            { user_id: 32, email:'monderable@gmail.com' },
            {key:privateKEY, passphrase:'mehmet'},
            {
                expiresIn: "2h",
                algorithm:'RS256'
            }
        );

        res.send({
            restHeader: { success: true },
            responseObject: token
        });
    } catch (e) {
        next(e);
    }
})

module.exports = router;