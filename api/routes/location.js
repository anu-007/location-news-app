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
    let query = req.params.location.toLowerCase();

    Location.findOne({name: query}, 'address location', function(err, loc) {
        if(loc)
            res.send(loc);
        else {
            geo.find(query, function(err, response){
                const location = new Location({
                    address: response[0].formatted_address,
                    name: query,
                    location: {
                        lat : response[0].location.lat,
                        lng : response[0].location.lng
                    }
                });
        
                location.save().then(result=> {
                    //console.log(result);
                })
                .catch(error => console.log(error));
        
        
                newsapi.v2.topHeadlines({
                    country: response[0].country.short_name.toLowerCase()
                }).then(response => {
                    const news = new News({
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
            
                    news.save().then(result=> {
                        //console.log(result);
                    })
                    .catch(error => console.log(error));
                });
            });
        }
    })

});

module.exports = router;