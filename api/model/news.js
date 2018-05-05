'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = mongoose.Schema({
    location_id: {
        type: Schema.Types.ObjectId,
        ref: 'Locations'
    },
    articles: [
        {
            source: String,
            author: String,
            title: String,
            description: String,
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