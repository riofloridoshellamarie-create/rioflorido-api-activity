const Guest = require('../models/guestModel');

// 1. GET ALL: List all rooms
const getAllGuest = async (req, res) => {
    try {
        const guest = await Guest.find();
        res.status(200).json(guest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. CREATE: Add a new room
const createGuest = async (req, res) => {
    try {
        const newGuest = await Guest.create(req.body);
        res.status(201).json(newGuest);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllGuest,
    createGuest
}