require("dotenv").config();
const express = require("express");
const app = express();

const auth = require("./middleware/auth");
const {createCacheMiddleware} = require('./middleware/cache')
const localization = require('./routes/localization')

const authenticationRouter = require('./routes/authentication');
const userRouter = require('./routes/user')


app.use(express.json());
app.use(auth)
app.use(createCacheMiddleware)
app.use(localization.localizationMiddleware())


app.use('/authentication', authenticationRouter);
app.use('/user', userRouter);
app.use('/localization',localization.service)

// server listening
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  console.log("deneme")
});
