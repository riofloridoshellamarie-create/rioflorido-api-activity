const express = require('express');
const router = express.Router();

// Import the Controller
const {
    getAllRooms,
    createRoom,
    getRoomById,
    updateRoom,
    deleteRoom,
} = require('../controllers/roomController');


const {
    getAllGuest,
    createGuest
} = require('../controllers/guestController');


const {
    getAllBooking,
    createBooking
} = require('../controllers/bookingController');

const { 
    protect, 
    authorize 
} = require('../middleware/authMiddleware');

// Routes
router.get('/rooms', getAllRooms);
router.post('/rooms', createRoom);
router.get('/rooms/:id', getRoomById);
router.put('/rooms/:id', updateRoom);
router.delete('/rooms/:id', deleteRoom);

router.get('/guests', getAllGuest);
router.post('/guests', createGuest);

router.get('/bookings', getAllBooking);
router.post('/bookings', createBooking);

//router.get('/', getRooms);
router.post('/', protect, authorize('admin', 'manager'), createRoom);

module.exports = router;