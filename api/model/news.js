'use strict';
const mongoose = require('mongoose');

var NewsSchema = mongoose.Schema({
    name: String,
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

module.exports = mongoose.model('News', NewsSchema);