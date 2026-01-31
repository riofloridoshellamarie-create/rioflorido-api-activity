const express = require('express');
const router = express.Router();
const data = require('../models/roomModel');

// GET /room with optional filtering
router.get('/room', (req, res) => {
    const { type, price, isBooked } = req.query;

    let filteredRooms = data
        .filter(room => !type || room.type.toLowerCase() === type.toLowerCase())
        .filter(room => !price || room.price <= parseFloat(price))
        .filter(room => isBooked === undefined || room.isBooked === (isBooked.toLowerCase() === 'true'));

    return filteredRooms.length === 0
        ? res.status(404).json({ status: 404, message: 'No rooms found matching the criteria' })
        : res.status(200).json({ status: 200, message: 'Retrieved rooms successfully', data: filteredRooms });
});

// POST /room
router.post('/room', (req, res) => {
    const { type, price } = req.body;
    if (!type || !price) {
        return res.status(400).json({ status: 400, message: 'Bad Request: Type and Price are required.' });
    }

    const newRoom = { id: data.length + 1, ...req.body };
    data.push(newRoom);
    res.status(201).json({ status: 201, message: 'Room created successfully', data: newRoom });
});

// PUT /room/:id
router.put('/room/:id', (req, res) => {
    const Id = parseInt(req.params.id);
    const Index = data.findIndex(r => r.id === Id);
    if (Index === -1) {
        return res.status(404).json({ status: 404, message: `Room with ID ${Id} not found` });
    }

    data[Index] = { id: Id, ...req.body };
    res.status(200).json({ status: 200, message: 'Room updated successfully', data: data[Index] });
});

// DELETE /room/:id
router.delete('/room/:id', (req, res) => {
    const Id = parseInt(req.params.id);
    const Index = data.findIndex(r => r.id === Id);

    if (Index === -1) {
        return res.status(404).json({ status: 404, message: `Room with ID ${Id} not found` });
    }

    data.splice(Index, 1);
    res.status(200).json({ status: 200, message: 'Room deleted successfully' });
});

module.exports = router;