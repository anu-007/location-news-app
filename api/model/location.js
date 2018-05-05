'use strict';
const mongoose = require('mongoose');

var LocationSchema = mongoose.Schema({
    name: String,
    address: {
        type: String,
        required: 'Kindly enter the name of the location'
    },
    location: {
        lat: Number,
        lang: Number
    }
});

module.exports = mongoose.model('Locations', LocationSchema);