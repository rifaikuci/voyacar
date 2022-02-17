const jwt = require("jsonwebtoken");
const fs   = require('fs');
const config = process.env;

const verifyToken = (req, res, next) => {


    if (!(req.url.includes('authentication/')
         || req.url.includes('localization')
         )) {

        const token = req.headers["x-auth-token"];
        if (!token) {
            /*
            return res.status(406)
                .send({
                    restHeader: {
                        success: false,
                        notificationType: 'ERROR',
                        message: "A token is required for authentication"
                    }
                })

             */
            return next()
        }
        try {
            var publicKey  = fs.readFileSync('./keys/public.pem', 'utf8');
            const decoded = jwt.verify(token, publicKey,  {
                expiresIn: "2h",
                algorithm:'RS256'
            });
            req.session = {user : decoded};
            return next();
        } catch (err) {
            return next()
            /*
            return res.status(406)
                .send({
                    restHeader: {
                        success: false,
                        notificationType: 'ERROR',
                        message: "Invalid Token"
                    }
                })

             */
        }
    }
    else return next();
};

module.exports = verifyToken;

