const moongoose = require('mongoose');
const bookingSchema = new moongoose.Schema({
    room: { type: moongoose.Schema.Types.ObjectId, ref: 'Room'},
    guest: { type: moongoose.Schema.Types.ObjectId, ref: 'Guest'},
    checkIn: Date,
    checkOut: Date,
});

module.exports = moongoose.model('Booking', bookingSchema);