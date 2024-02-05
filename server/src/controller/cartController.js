const productSchema = require("../models/productModels.js")
const cartSchema = require("../models/cartModels.js")
const Product = productSchema;
const Cart = cartSchema;

// get all cart item 
module.exports.getCart = async (req, res) => {
};


// add to cart
module.exports.addToCart = async (req, res) => {
    const { userId, productId } = req.params; // Assuming the data is sent in the request body

    try {
        // Add the product to the user's cart (assuming you have a User model with a cart property)
        const updatedUser = await Cart.Create(
            userId, productId,
            { new: true }
        );

        res.status(200).json({ message: 'Product added to cart successfully', updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};