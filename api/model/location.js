'use strict';
const mongoose = require('mongoose');

var LocationSchema = mongoose.Schema({
    address: {
        type: String,
        required: 'Kindly enter the name of the location'
    },
    location: {
        lat: Number,
        lang: Number
    },
    articles: [
        {
            source: String,
            author: String,
            title: String,
            description: String,
            url: String,
            urlToImage: String,
            publishedAt: Date
        }
    ]
});

module.exports = mongoose.model('Locations', LocationSchema);