const mongoose = require('mongoose');
const guestSchema = new mongoose.Schema({
    name: String,
<<<<<<< HEAD
    email: String
});

module.exports = mongoose.model('Guest', guestSchema);
=======
    email: String,
});

module.exports = mongoose.model('Guest', guestSchema);
>>>>>>> 8bf48fef67bbb8a98d96b7b010df60a0bfc96916
