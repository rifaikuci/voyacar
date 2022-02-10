var express = require('express');
var router = express.Router();
const axios = require('axios');
var jwt = require('jsonwebtoken')


router.post("/", async function (req, res, next) {
    try {
        const token = jwt.sign(
            { user_id: 32, email:'monderable@gmail.com' },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
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