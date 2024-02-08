const asyncHandler = require('express-async-handler');

const User = require('../models/User');
const Jwt = require("jsonwebtoken");


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
            await user.save();
            const token = Jwt.sign(
                { userId: user.id, email: newUser.email },
                "secretkeyappearshere",
                { expiresIn: "2h" }
            );
            //return success
            res.status(200).json({ message: "Registration Successful", user, token:token });
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

exports.login = asyncHandler(async (req,res)=>{
    try {
       const existingUser = await User.findOne({ "email": req.body.email });
        if (!existingUser || existingUser.password !== req.body.password) {
            const error = Error("Wrong details please check at once");
            return next(error);
        }
       const token = jwt.sign(
            { userId: existingUser.id, email: existingUser.email },
            "secretkeyappearshere",
            { expiresIn: "1h" }
        );
        res.status(200).json({
            success: true,
            data: {
                userId: existingUser.id,
                email: existingUser.email,
                token: token,
            },
        }); } catch {
        const error = new Error("Error! Something went wrong.");
        return next(error);
      }

});
