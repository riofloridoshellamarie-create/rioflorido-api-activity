const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: Number,
        required: true,
        unique: true,
        min: [100, 'Room number must be 3 digits'],
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be negative'],
    },
    isBooked: {
        type: Boolean,
        default: false,
    },
    features: [String],
});

module.exports = mongoose.model('Room', roomSchema);

maintenanceLog: [
 {
    date: { type: Date, default: Date.now },
    issue: String, // e.g., "Broken AC"
    fixed: Boolean
 }
]