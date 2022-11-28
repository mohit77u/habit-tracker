// import dotenv for secret variables 
const dotenv = require('dotenv');
dotenv.config();

//- Importing Modules -//
const express = require('express');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const customMiddleware = require('./config/middleware');
const session = require('express-session');

const app = express();

// get db from mongoose
const db = require('./config/mongoose');

// connecting SASS
const sassMiddleware = require('node-sass-middleware');

// use sass middleware
app.use(sassMiddleware({
    src: './resources/css',
    dest: './assets/css',
    debug: true,
    outputStyle: 'compressed',
    // where should my server look out for css file
    prefix: '/css'
}));

// BodyParser
app.use(express.urlencoded({ extended: false }));

// static assets
app.use(express.static('./assets'));

// layouts section
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', './layout')
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// Set the template engine ejs
app.set('view engine','ejs');

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
