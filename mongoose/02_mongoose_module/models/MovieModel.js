const mongoose = require('mongoose');

let MovieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        default: '匿名',
    },
    tiket: Number,
    price: Number
});

module.exports = mongoose.model('movies', MovieSchema);