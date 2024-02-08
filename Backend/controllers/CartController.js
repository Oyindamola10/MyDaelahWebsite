const asyncHandler = require('express-async-handler');

const Cart = require('../models/Cart')

const createCart = asyncHandler(async (req, res) => {
    const { name, image, price } = req.body;
    //create new post object
    if (!name.length || !image.length || !price) {
        res.status(400).send({
            error: 'fill in all required fields'
        })
    }

    try {
        const cart = new Cart({
            name: name.trim(),
            image,
            price: price.trim(),
        })
        //save post
        await cart.save();
        //return success
        res.status(200).json({ message: "Cart created successfully", cart });
    } catch (error) {
        res.status(500).send({ error: "Error creating cart", error })
    }
});

const getCart = asyncHandler(async (req, res) => {
    console.log("Request body", req.body)
    const cart = await Cart.find();
    res.status(200).json(cart);
});
const deleteCart = asyncHandler(async (req, res) => {
    console.log(req.params)
    try {
        //find productList
        const cart = await Cart.findById(req.params.id);
        //delete productList
        await Cart.deleteOne({ _id: cart._id });

        res.status(200).json({ message: "Cart deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting Cart" })
    }
});
module.exports = {createCart,getCart, deleteCart}