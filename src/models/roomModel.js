const mongoose = require('mongoose');


const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    isBooked: {
        type: Boolean,
        default: false,
    },
    maintenance: [
        {
            date: {type: Date, default: Date.now},
            issue: String, 
            fixed: Boolean
        }
    ],
    features: [String],
});

module.exports = mongoose.model('Room', roomSchema);

