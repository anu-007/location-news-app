'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    address: {
        type: String,
        description: 'the name of the location'
    },
    location: {
        lat: {
            type: Number,
            required: true
        },
        lang: {
            type: Number,
            required: true
        }
    }
});

module.exports = mongoose.model('Locations', LocationSchema);