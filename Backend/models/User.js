const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    first_name: String,
    last_name: String,
    phone_number: {
        type: Number,
     },


})

module.exports = mongoose.model('User', UserSchema  );