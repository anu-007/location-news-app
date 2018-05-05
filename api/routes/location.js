const express = require('express');
const NewsAPI = require('newsapi');
const geocoder = require('google-geocoder');

const Location = require('../model/location');
const News = require('../model/news');

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

    geo.find(query, function(err, response){
        const location = new Location({
            name: query,
            address: response[0].formatted_address,
            location: {
                lat : response[0].location.lat,
                lang : response[0].location.lang
            }
        });
    });

    newsapi.v2.topHeadlines({
        country: 'us'
    }).then(response => {
        
        const news = new News({
            name: query,
            article: []
        });

        response.articles.forEach( (item)=> {
            news.articles.push({
                source: item.source.name,
                author: item.author,
                title: item.title,
                description: item.description,
                url: item.url,
                urlToImage: item.urlToImage,
                publishedAt: item.publishedAt
            });
        });
    });

});

module.exports = router;