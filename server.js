'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const NewsAPI = require('newsapi');
const geocoder = require('google-geocoder');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/', (req, res) => {
    loc = req.body.location;

});

mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    let db = database;
    console.log("Database connection ready");

    var server = app.listen(process.env.PORT || 8080, function () {
      var port = server.address().port;
      console.log("App now running on port", port);
    });
});  