'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = mongoose.Schema({
    location_id: Schema.Types.ObjectId,
    articles: [
        {
            source: String,
            author: String,
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            url: String,
            urlToImage: String,
            publishedAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = mongoose.model('News', NewsSchema);