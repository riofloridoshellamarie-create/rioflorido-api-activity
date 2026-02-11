<<<<<<< HEAD
const dns = require('node:dns').promises;
dns.setServers(['1.1.1.1', '8.8.8.8']);
=======
>>>>>>> 8bf48fef67bbb8a98d96b7b010df60a0bfc96916

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;