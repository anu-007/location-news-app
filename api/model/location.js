'use strict';
const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
    location_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: String,
    address: {
        type: String,
        description: 'the name of the location'
    },
    location: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    }
});

module.exports = mongoose.model('Locations', LocationSchema);