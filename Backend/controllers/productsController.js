
const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');
const Cart = require('../models/Cart')
const productList = require("../productList");


//@desc create a productList
//@method POST
//@route '/api/products'

const createProduct = asyncHandler(async (req, res) => {
    const { name, image, price } = req.body;
    //create new post object
    if (!name.length || !image.length || !price) {
        res.status(400).send({
            error: 'fill in all required fields'
        })
    }

    try {
        const products = new Product({
            name: name.trim(),
            image,
            price: price.trim(),
        })
        //save post
        await products.save();
        //return success
        res.status(200).json({ message: "Product created successfully", products });
    } catch (error) {
        res.status(500).send({ error: "Error creating productList", error })
    }
});

const addMultipleProducts = asyncHandler(async (req, res) => {
    const items = [
            {
                image: "https://i.imgur.com/KIYAxB5.jpg",
                name:  "Ladies Watch Set",
                price: "NGN25000"
            },
            {
                image: "https://i.imgur.com/X559nMk.jpg",
                name: "Black Female Bracelet",
                price: "NGN5,500"

            },
            {
                image: "https://i.imgur.com/ldkNFqc.jpg",
                name:"Quality Leather Belt",
                price: "NGN12,000"
            },
            {
                image: "https://i.imgur.com/u0J2nel.jpg",
                name: "Gucci Sunglasses",
                price: "NGN13,000"
            },
            {
                image: "https://i.imgur.com/9XdxFC4.jpg",
                name: "Quality Leather Wristwatch",
                price: "NGN23,000"
            },
            {
                image: "https://i.imgur.com/BJl3aRD.jpg",
                name: "Necklace",
                price: "NGN10,500"
            },
            {
                image: "https://i.imgur.com/UMUUAv7.jpg",
                name: "Prada Sunglasses",
                price: "NGN15,000"
            },
            {
                image: "https://i.imgur.com/JYx2ch9.jpg",
                name: "Quality Leather Wristwatch",
                price: "NGN23,000"
            },
            {
                image: "https://i.imgur.com/sMcA7cu.jpg",
                name: "Quality Leather Belt",
                price: "NGN12,000"
            },
            {
                image: "https://i.imgur.com/9Zr0sww.jpg",
                name: "Armpit Purse",
                price: "NGN25,000"
            },
            {
                image: "https://i.imgur.com/8tCu2Jk.jpg",
                name: "Sunglasses",
                price:"NGN13,000"
            },
            {
                image: "https://i.imgur.com/BJl3aRD.jpg",
                name: "Necklace",
                price: "NGN10,500"
            },
            {
                image: "https://i.imgur.com/AgKdZ4n.jpg",
                name: "Necklace",
                price: "NGN10,500"
            },
            {
                image: "https://i.imgur.com/KQdgttt.jpg",
                name: "Earrings + Pendant",
                price: "NGN8,500"

            },
            {
                image: "https://i.imgur.com/JRoBu6Z.jpg",
                name: "Silver Necklace",
                price: "NGN15,000"

            },
            {
                image: "https://i.imgur.com/U84akaj.jpg",
                name: "Silver Female Bracelet",
                price: "NGN5,500"

            },
            {
                image: "https://i.imgur.com/R59NsXU.jpg",
                name: "Gold Female Bracelet",
                price: "NGN5,500"

            },
            {
                image: "https://i.imgur.com/X559nMk.jpg",
                name: "Black Female Bracelet",
                price: "NGN5,500"

            },
            {
                image: "https://i.imgur.com/GfHYI0R.jpg",
                name: "Earrings",
                price: "NGN7,500"

            },
            {
                image: "https://i.imgur.com/F1qeyQJ.jpg",
                name: "Earrings",
                price: "NGN7,500"

            },
            {
                image: "https://i.imgur.com/1uQVM60.jpg",
                name: "Earrings",
                price: "NGN7,500"

            },
            {
                image: "https://i.imgur.com/0Zhksp6.jpg",
                name: "Earrings + Pendant",
                price: "NGN8,500"

            },
            {
                image: "https://i.imgur.com/YazKjyR.jpg",
                name: "Earrings + Pendant",
                price: "NGN8,500"

            },
            {
                image: "https://i.imgur.com/qTf5siW.jpg",
                name: "Earrings + Pendant",
                price: "NGN8,500"

            },
            {
                image: "https://i.imgur.com/bgH4k4K.jpg",
                name: "Earrings + Pendant",
                price: "NGN8,500"

            },
            {
                image: "https://i.imgur.com/ptv68Mi.jpg",
                name: "Earrings + Pendant",
                price: "NGN8,500"

            },
            {
                image: "https://i.imgur.com/KQdgttt.jpg",
                name: "Earrings + Pendant",
                price: "NGN8,500"

            },
            {
                image: "https://i.imgur.com/JRoBu6Z.jpg",
                name: "Silver Necklace",
                price: "NGN15,000"

            },
            {
                image: "https://i.imgur.com/DSr3P3B.jpg",
                name: "Silver Necklace",
                price: "NGN15,000"

            },
            {
                image: "https://i.imgur.com/BnrEAt8.jpg",
                name: "Silver Necklace",
                price: "NGN15,000"

            },
            {
                image: "https://i.imgur.com/GgCbhul.jpg",
                name: "VC Chain Wristwatch ",
                price: "NGN25,000",

            },
            {
                image: "https://i.imgur.com/MGZfnOe.jpg",
                name: "AP Leather Wristwatch ",
                price: "NGN25,000"
            },
            {
                image: "https://i.imgur.com/sRPBX3r.jpg",
                name: "Rolex Wristwatch ",
                price: "NGN95,000"
            },
            {
                image: "https://i.imgur.com/biuiNMj.jpg",
                name: "Casio Wristwatch ",
                price: "NGN12,000"
            },
            {
                image: "https://i.imgur.com/U7qXTW6.jpg",
                name: "Casio Wristwatch ",
                price: "NGN12,000"
            },
            {
                image: "https://i.imgur.com/1B4u22B.jpg",
                name: "Casio Wristwatch ",
                price: "NGN12,000"
            },
            {
                image: "https://i.imgur.com/EL659AS.jpg",
                name: "Michael Kors Watch",
                price: "NGN30,000"
            },
            {
                image: "https://i.imgur.com/bc7lYur.jpg",
                name: "Michael Kors Watch",
                price: "NGN30,000"
            },
            {
                image: "https://i.imgur.com/N47JheW.jpg",
                name: "Michael Kors Watch",
                price: "NGN30,000"
            },
            {
                image: "https://i.imgur.com/KIYAxB5.jpg",
                name:"Ladies Watch Set",
                price: "NGN25000"
            },
            {
                image: "https://i.imgur.com/KwIUiMo.jpg",
                name:" Ladies Watch Set",
                price: "NGN25000"
            },
            {
                image: "https://i.imgur.com/8tkAakR.jpg",
                name:" Ladies Watch Set",
                price: "NGN25000"
            },
            {
                image: "https://i.imgur.com/4NTNp9O.jpg",
                name:" Ladies Watch Set",
                price: "NGN25000"
            },
            {
                image: "https://i.imgur.com/77jFWKe.jpg",
                name:" Ladies Watch Set",
                price: "NGN25000"
            },
            {
                image: "https://i.imgur.com/nHFY0xJ.jpg",
                name:" Ladies Watch Set",
                price: "NGN25000"
            },
            {
                image: "https://i.imgur.com/0et835T.jpg",
                name:" Ladies Watch Set",
                price: "NGN25000"
            },
            {
                image: "https://i.imgur.com/RO4cP6j.jpg",
                name:" Ladies Watch Set",
                price: "NGN25000"
            },
            {
                image: "https://i.imgur.com/AqKFPO7.jpg",
                name:" Ladies Watch Set",
                price: "NGN25000"
            },
            {
                image: "https://i.imgur.com/GGno3Cp.jpg",
                name:" Ladies Watch Set",
                price: "NGN25000"
            },
            {
                image: "https://i.imgur.com/1jTJI1c.jpg",
                name:" Ladies Watch Set",
                price: "NGN25000"
            },
            {
                image: "https://i.imgur.com/CmQ4LsN.jpg",
                name:" Ladies Watch Set",
                price: "NGN25000"
            },
            {
                image: "https://i.imgur.com/d7td70U.jpg",
                name:" Quality Chain Wristwatch",
                price: "NGN17000"
            },
            {
                image: "https://i.imgur.com/KIYAxB5.jpg",
                name:" Ladies Watch Set",
                price: "NGN25000"
            },
            {
                image: "https://i.imgur.com/KIYAxB5.jpg",
                name:" Ladies Watch Set",
                price: "NGN25000"
            }
        ];
    if (!(items && items.length > 0)) {
        return res.status(400).send({ message: 'Product list is empty.' });
    }

    try {
        await Promise.all(items.map(async (item) => {
            console.log(item);
            const product = new Product(item);
            await product.save();
        }));

        // Send the response after all products have been added
        res.status(200).json({ message: "Products created successfully" });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

//@desc fetch a productList
//@method GET
//@route '/api/products'

const getProducts = asyncHandler(async (req, res) => {
    console.log("Request body", req.body)
    const products = await Product.find();
    res.status(200).json(products);
});

//@desc update a productList
//@method PUT
//@route '/api/products/:id'

const updateProduct = asyncHandler(async (req, res) => {
    try {
        //find post
        const product = await Product.findById(req.params.id);
        if (req.body.name) {
            product.name = req.body.name;
        }
        if (req.body.image) {
            product.image = req.body.image;
        }
        if (req.body.price) {
            product.price = req.body.price;
        }
        //save post
        await product.save();
        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        res.status(500).json({ error: "Error updating productList" });
    }
});

//@desc delete a productList
//@method DELETE
//@route '/api/products/:id'

const deleteProduct = asyncHandler(async (req, res) => {
    try {
        //find productList
        const product = await Product.findById(req.params.id);
        //delete productList
        await Product.deleteOne({ _id: product._id });

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting productList" })
    }
});
deleteCart = asyncHandler(async (req, res) => {
    try {
        //find productList
        const cart = await Cart.findById(req.params.id);
        //delete productList
        await Cart.deleteOne({ _id: cart._id });

        res.status(200).json({ message: "Cart deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting cart" })
    }
});

//@desc fetches a specific productList by id
//@method GET
//@route '/api/products/:id'

const searchProduct = asyncHandler(async (req, res) => {

    try {
        const products = await Product.find({ name: req.params.id });
        res.status(200).send({ message: "Product found", postData: products });
    } catch (error) {
        res.status(500).json({ error: "Product not found" });
    }



});

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

module.exports = { createProduct, getProducts, updateProduct, deleteProduct, searchProduct ,addMultipleProducts, createCart,getCart,deleteCart }
