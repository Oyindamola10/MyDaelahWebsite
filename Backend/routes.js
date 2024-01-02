const express = require('express');
// import post model
const Product = require('./models/Product');
const Cart = require('./models/Cart');
const Contact = require('./models/Contact');
const AuthController = require('./controllers/AuthController')
const ProductController = require('./controllers/productsController')
const router = express.Router();


/**
 * Product Endpoints
 */


// router.get('/upload/multiple',ProductController.addMultipleProducts)
//get all cart api endpoint
router.get('/cart', async (req, res) => {
    console.log("Request body", req.body)
    const cart = await Cart.find();
    res.status(200).json(cart);
})
//get all contact api endpoint
router.get('/contact', async (req, res) => {
    console.log("Request body", req.body)
    const contact = await Contact.find();
    res.status(200).json(contact);
})

/**
 * Authentication Endpoint
 */
router.post('/register', AuthController.register);

/**
 * Users Management Endpoints
 */
router.get('/users', AuthController.getAllUsers);

//create a new contact api endpoint
router.post('/contact', async (req, res) => {
    //destructure request body
    const { name, email, phone, subject, message } = req.body;


    if (!name.length || !email.length || !phone.length || !subject.length || !message.length) {
        res.status(400).send({ error: 'please fill in all the fields' });
    }

    try {
        const contact = new Contact({
            name,
            email,
            phone,
            subject,
            message
        })
        await contact.save();
        res.status(200).json({ message: "contacted us successfully", contact });
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})

//Cart end point
// router.post('/cart', async (req, res) => {
//     //destructure request body
//     const {name, image,price} = req.body;
//     //create new post object
//     const cart = new Cart({
//         name,
//         price,
//         image
//     })

//     //save post
//     await cart.save();

//     //handle error
//     if (!cart) {
//         res.status(500).json({ error: "Error creating productList" })
//     }

//     //return success
//     res.status(200).json({ message: "Cart created successfully", cart });
// })
//get cart data
// router.get('/cart/:id', async (req, res) => {
//     //find post
//     const cart = await Cart.find(req.params.id);

//     //handle error
//     if (!cart) {
//         res.status(500).json({ error: "Cart not found" });
//     }
//     res.status(200).json({ message: "Cart found", postData: Cart });
// })
//get signUp data


// export router
module.exports = router;
