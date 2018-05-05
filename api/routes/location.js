const express = require('express');
const Product = require('../model/location');
const NewsAPI = require('newsapi');
const geocoder = require('google-geocoder');

const router = express.Router();

const newsapi = new NewsAPI(process.env.NEWS_API);
var geo = geocoder({
    key: process.env.GEOCODER_API
});

router.get('/', (req, res)=>{
    res.status(200);
});

router.get('/:location', (req,res)=> {
    let query = req.params.location;

    //if data does not found


    geo.find(query, function(err, res){ 
        const Location = new Location({
            address: res[0].formatted_address,
            location: {
                lat: res[0].location.lat,
                lang: res[0].location.lang
            }
        });
    });
});

module.exports = router;