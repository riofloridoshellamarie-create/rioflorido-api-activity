<<<<<<< HEAD
const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    room: {type: mongoose.Schema.Types.ObjectId, ref: 'Room'},
    guest: {type: mongoose.Schema.Types.ObjectId, ref: 'Guest'},
    checkin: Date,
    checkOut: Date
});
module.exports = mongoose.model('Booking', bookingSchema);
=======
const moongoose = require('mongoose');
const bookingSchema = new moongoose.Schema({
    room: { type: moongoose.Schema.Types.ObjectId, ref: 'Room'},
    guest: { type: moongoose.Schema.Types.ObjectId, ref: 'Guest'},
    checkIn: Date,
    checkOut: Date,
});

module.exports = moongoose.model('Booking', bookingSchema);
>>>>>>> 8bf48fef67bbb8a98d96b7b010df60a0bfc96916
