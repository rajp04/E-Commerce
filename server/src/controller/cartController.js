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

        const alreadyAddCart = await Cart.findOne({ userId, productId });
        if (alreadyAddCart) {
            return res.json({
                success: 0,
                message: "Cart already exists",
            });
        }

        const result = await Cart.create({ userId, productId })
        res.json({
            success: 1,
            message: "Successfully Added in Cart",
            result
        })
    } catch (error) {
        res.json({
            success: 0,
            errorMessage: `Error in adding the product to the cart ${error}`
        })
    }
};


// remove item from Id cart
module.exports.removeItemCart = async (req, res) => {
    try {
        const id = req.params.id;

        // Find the item in the cart and delete it
        const deletedItem = await Cart.deleteOne({ _id: id });

        if (!deletedItem) {
            // If the item is not found, send an error response
            return res.status(404).json({
                success: 0,
                errorMessage: 'Item not found in the cart.'
            });
        }

        // If the item is successfully removed, send a success response
        res.json({
            success: 1,
            message: 'Item removed from the cart successfully.'
        });
    } catch (error) {
        // If an error occurs during the process, send an error response
        res.status(500).json({
            success: 0,
            errorMessage: `Error in removing the item from the cart: ${error}`
        });
    }
}


// remove all items from user's cart
module.exports.removeAllItem = async (req, res) => {
    try {
        const userId = req.params.id;

        // Assuming 'userId' is the field in your Cart schema representing the user's ID
        // Delete all cart items for the user with the given ID
        const deleteResult = await Cart.findByIdAndDelete(userId);
        console.log(deleteResult);
    } catch (error) {
        // If an error occurs during the process, send an error response
        console.error(error);
        res.status(500).json({
            success: 0,
            errorMessage: `Error in removing items from the cart: ${error}`
        });
    }

}
