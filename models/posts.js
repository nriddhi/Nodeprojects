const mongoose = require('mongoose');

const videoPosts = new mongoose.Schema({

    title : {
        type: String,
        required: true,
        unique: true
    },
    author : {
        type: String,
    },
    description : {
        type: String,
    },

    link : {
        type: String,
        required: true
    },

    thumbnail : {
        type: String,
    },

    date : {
        type: String,
    },

    duration : {
        type: String,
    },

    views : {
        type: Number,
    },

}, {timestamps: true});

module.exports = mongoose.model('videoPosts',videoPosts);