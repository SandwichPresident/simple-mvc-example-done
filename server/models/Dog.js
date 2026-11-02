const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    breed: {
        type: String,
        required: true,
        trim: true,
    },

    age: {
        type: Number,
        min: 0,
        required: true,
    },

    createdDate: {
        type: Date,
        default: Date.now,
    },
});

const DogModel = mongoose.model('Dog', DogSchema);

module.exports = DogModel;