const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone:{
        type: Number
    },


})

module.exports = mongoose.model('User', UserSchema  );
