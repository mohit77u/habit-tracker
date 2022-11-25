// import dotenv for secret variables 
const dotenv = require('dotenv');
dotenv.config();

//- Importing Modules -//
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const customMiddleware = require('./config/middleware');
const session = require('express-session');

const app = express();

//-Connect to Mongo
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch(err => console.log(err));

//EJS //
app.use(expressLayouts);
app.use("/assets", express.static('./assets'));
app.set('view engine', 'ejs');

//-BodyParser
app.use(express.urlencoded({ extended: false }));

// Express Session//
app.use(
    session({
        name: 'habit_tracker',
        secret: 'dgsge3twsdvgsbhhbsdfeesfndsvd4xnfjdsde3',
        resave: false,
        // expire time for cookie
        cookie: {
            maxAge: (1000* 60* 100)
        },
        saveUninitialized: true
    })
);

// Connect Flash//
app.use(flash());
app.use(customMiddleware.setFlash);

//Routes //
app.use('/', require('./routes/index'));

//Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('App is running on ' + PORT);
});
