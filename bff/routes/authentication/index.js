var express = require('express');
var router = express.Router();

const { createMollieClient, PaymentMethod, ApiMode } = require('@mollie/api-client');
const mollieClient = createMollieClient({ apiKey: 'test_vAhhtE2Sms3JHCU7x2Rtv38KTaWfWb' });


const registerRouter = require('./register');
const loginRouter = require('./login');

router.use('/register', registerRouter);
router.use('/login', loginRouter);

router.get("/mollie", async function (req, res, next) {
    try {
       
       // const list = await mollieClient.profiles.get('pfl_WGcemva4Ey')
     //   const me =  await mollieClient.profiles.getCurrent();
        
        //const t =  await mollieClient.methods.all();
        const methods = await mollieClient.payments.create({
            amount:{"currency":"EUR", "value":"100.00"},
            description:"Test",
            redirectUrl:"https://finastech.com",
            webhookUrl:"http://81.214.252.36:9000/authentication/webhook",
            method:PaymentMethod.ideal,
            customerId:"cst_SKrCuGEtmq",

        });
        res.send({
            restHeader: { success: true },
            responseObject: methods
        });
    } catch (e) {
        next(e);
    }
})


router.post("/webhook", async function (req, res, next) {
    try {
       
        const param = req.body
        res.send({
            restHeader: { success: true },
            responseObject: param
        });
    } catch (e) {
        next(e);
    }
})

module.exports = router;