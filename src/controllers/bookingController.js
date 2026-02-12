const Booking = require('../models/bookingModel');

// 1. GET ALL: List all rooms
const getAllBooking = async (req, res) => {
    try {
        const booking = await Booking.find();
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. CREATE: Add a new room
const createBooking = async (req, res) => {
    try {
        const newBooking = await Booking.create(req.body);
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllBooking,
    createBooking
}