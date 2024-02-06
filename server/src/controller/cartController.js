const cartSchema = require("../models/cartModels.js");
const Cart = cartSchema.Cart;

// get all cart item 
module.exports.getItemCart = async (req, res) => {
    try {
        const id = req.params.id
        // Retrieve all products from the database using the Product model
        const result = await Cart.find({ userId: id });

        // Respond with a success message and the retrieved products
        res.status(200).json({
            success: 1,
            result
        });

    } catch (error) {
        // Handle any errors that occur during the process
        console.error(error);

        // Respond with an error message and status 400
        res.status(400).json({
            success: 0,
            message: 'Error in fetching products'
        });
    }

};


// add to cart
module.exports.addToCart = async (req, res) => {
    try {
        const { userId, productId } = req.body

        if (!userId || !productId) {
            return res.json({
                success: 0,
                message: "User ID and Product ID not Found",
            });
        }

        const result = await Cart.create({ userId, productId })
        res.json({
            result
        })
    } catch (error) {
        res.json({
            success: 0,
            errorMessage: `Error in adding the product to the cart ${error}`
        })
    }
};


// remove item from cart
module.exports.removeItemCart = async (req, res) => {
    try {
        const id = req.params.id

        await Cart.findOneAndDelete({ _id: id })
    } catch (error) {
        res.json({
            success: 0,
            errorMessage: `Error in adding the product to the cart ${error}`
        })
    }
}