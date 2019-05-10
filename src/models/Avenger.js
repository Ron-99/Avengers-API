'use strict';
const mongoose = require('mongoose');

const AvengerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    hero_name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Avenger', AvengerSchema);