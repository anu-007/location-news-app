'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const NewsAPI = require('newsapi');
const geocoder = require('google-geocoder');
const mongoose = require('mongoose');

const locationRoute = require('./api/routes/location');

mongoose.connect(`mongodb://${process.env.MLAB_DB_USER}:${process.env.MLAB_DB_PASS}@ds115740.mlab.com:15740/loc-news`);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use((req, res, next)=> {
//     res.header('Access-Control-Allow-Origin', '*');
// });

app.use('/api', locationRoute);

app.use((req, res, next)=> {
    const error = new Error('Not Found');
    error.status(404);
    next(error);
})

app.use((error, req, res, next)=> {
    error.status = error.status || 500;
    res.json({
        error: {
            message: error.message
        }
    });
});

var port = process.env.port || 4000;

app.listen(port, () => {
    console.log('We are live on ' + port);
});
