const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    Weight: {type: Number, required: true},
    src: {type: String, required: true},
})

module.exports = mongoose.model('Schema', Schema);