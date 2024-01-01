const asyncHandler = require('express-async-handler');

const User = require('../models/User');
const Product = require("../models/Product");

 exports.register =  asyncHandler(async (req, res) => {
    const { username, password, firstName,lastName,email,phone } = req.body;
    if ( username, password, firstName,lastName,email, phone) {
        try {
            const user = new User({
                username: username.trim(),
                password:password.trim(),
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email: email.trim(),
                phone: phone,
            })
            //save post
            await user.save();
            //return success
            res.status(200).json({ message: "Registration Successful", user });
        } catch (error) {
            res.status(500).send({ errors: "Error creating user", error })
        }
    }
    else{
        res.status(400).send({
            error: 'Bad Request: fill in all required fields'
        })
    }
});

//Get all Users
exports.getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});
