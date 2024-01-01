const mongoose = require('mongoose');

const connectDb = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URI);
        console.log('database connected');
    } catch (error) {
        console.log('an error occurred while trying to connect to db', error);
    }
}

module.exports = { connectDb }
