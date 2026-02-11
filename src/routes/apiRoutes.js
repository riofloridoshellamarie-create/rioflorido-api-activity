const express = require('express' );
<<<<<<< HEAD
const router = express.Router();
=======
const router = express.Router( );
>>>>>>> 8bf48fef67bbb8a98d96b7b010df60a0bfc96916

// Import the Controller
const {
    getAllRooms,
    createRoom,
    getRoomById,
    updateRoom,
    deleteRoom,
} = require('../controllers/roomController');

// Routes
router.get('/rooms', getAllRooms);
router.post('/rooms', createRoom);
router.get('/rooms/:id', getRoomById);
router.put('/rooms/:id', updateRoom);
router.delete('/rooms/:id', deleteRoom);

module.exports = router;