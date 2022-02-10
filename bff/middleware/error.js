function error(err, req, res, next) {
    if (err.status) {
        res.status(err.status);
        res.send({
            restHeader: {
                success: false,
                notificationType: "ERROR",
                message: err.message
            },
            responseObject: null
        });
    }
    /*else {
        res.send(
            err.restHeader ?
             {restHeader: err.restHeader} : 
             (err.notificationType ? 
             {
                restHeader: {
                    code:err.code,
                    success: false,
                    notificationType: err.notificationType === 'APPROVAL' ? 'APPROVAL' :'ERROR',
                    message: err.message
                },
                responseObject: null
            } : 
            {
                restHeader: {
                    success: false,
                    notificationType: 'ERROR',
                   message: err.message
                },
                responseObject: null
            }
            ));
    }*/
    else {
        res.send(
            err.restHeader ?
                { restHeader: err.restHeader } :
                (err.httpStatus === 500 || err.httpStatus === 400 ?
                    {
                        restHeader: {
                            success: false,
                            notificationType: 'ERROR',
                            //message: 'Bir hata ile karşılaşılmıştır. Daha sonra tekrar deneyiniz.',
                            message: err.message
                        },
                        responseObject: null
                    } :
                    (err.notificationType ?
                        {
                            restHeader: {
                                code:err.code,
                                success: false,
                                notificationType: err.notificationType === 'APPROVAL' ? 'APPROVAL' :'ERROR',
                                message: err.message
                            },
                            responseObject: null
                        } :
                        {
                            restHeader: {
                                success: false,
                                notificationType: 'ERROR',
                                message: err.message
                            },
                            responseObject: null
                        }
                    )));
    }
}

module.exports = error;