const cartSchema = require("../models/cartModels.js");
const Cart = cartSchema.Cart;
const productSchema = require("../models/productModels.js")
const Product = productSchema;

// get all cart item 
module.exports.getItemCart = async (req, res) => {
    try {
        const id = req.params.id
        // Retrieve all products from the database using the Product model
        const result = await Cart.find({ userId: id }).populate("productId").select("-createdAt -updatedAt -__v")

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
        const { userId, productId } = req.body;

        if (!userId || !productId) {
            return res.json({
                success: 0,
                message: "User ID and Product ID not Found",
            });
        }

        const product = await Product.findById(productId); // Assuming you have a method to find a product by its ID

        if (!product) {
            return res.json({
                success: 0,
                message: "Product not found",
            });
        }

        if (product.stock > 0) {
            const alreadyInCart = await Cart.findOne({ userId, productId });
            if (alreadyInCart) {
                return res.json({
                    success: 0,
                    message: "Product already in cart",
                });
            }

            const result = await Cart.create({ userId, productId });
            return res.json({
                success: 1,
                message: "Successfully added to cart",
                result
            });
        } else {
            return res.json({
                success: 0,
                message: "This product is out of stock",
            });
        }
    } catch (error) {
        return res.json({
            success: 0,
            errorMessage: `Error in adding the product to the cart ${error}`
        });
    }
};


// remove item from cart ById
module.exports.removeItemCart = async (req, res) => {
    try {
        const id = req.params.id;

        // Find the item in the cart and delete it
        const deletedItem = await Cart.findByIdAndDelete(id);

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
        const deleteResult = await Cart.deleteMany({ userId });
    } catch (error) {
        // If an error occurs during the process, send an error response
        console.error(error);
        res.status(500).json({
            success: 0,
            errorMessage: `Error in removing items from the cart: ${error}`
        });
    }

}


// save for later controller
module.exports.saveForLater = async (req, res) => {
    const { userIdForSave, productIdForSave } = req.body;
    try {
        if (!userIdForSave || !productIdForSave) {
            return res.json({
                success: 0,
                message: "User ID and Product ID not Found",
            });
        }

        const existSave = await Cart.findOne({ userIdForSave, productIdForSave });
        if (existSave) {
            return res.json({
                success: 0,
                message: "already exists",
            });
        }

        const result = await Cart.create({ userIdForSave, productIdForSave });
        return res.json({
            success: 1,
            message: "Successfully added to save for later",
            result
        });
    } catch (error) {
        return res.json({
            success: 0,
            errorMessage: `Error in adding the product to the cart ${error}`
        });
    }
}

// get save for later data controller
module.exports.getItemSave = async (req, res) => {
    try {
        const id = req.params.id
        // Retrieve all products from the database using the Product model
        const result = await Cart.find({ userIdForSave: id }).populate("productIdForSave").select("-createdAt -updatedAt -__v")

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


// remove item from Id save for later
module.exports.removeItemSave = async (req, res) => {
    try {
        const id = req.params.id;

        // Find the item in the cart and delete it
        const deletedItem = await Cart.deleteOne({ _id: id });

        if (!deletedItem) {
            // If the item is not found, send an error response
            return res.status(404).json({
                success: 0,
                errorMessage: 'Item not found in the save for later.'
            });
        }

        // If the item is successfully removed, send a success response
        res.json({
            success: 1,
            message: 'Item removed from the save for later successfully.'
        });
    } catch (error) {
        // If an error occurs during the process, send an error response
        res.status(500).json({
            success: 0,
            errorMessage: `Error in removing the item from the save for later: ${error}`
        });
    }
}


// Update quantity of cart item
module.exports.updateQTY = async (req, res) => {
    try {
        const id = req.params.id;

        // Find the cart item by its ID and update its quantity
        const updateQTY = await Cart.findByIdAndUpdate(id,
            { qty: req.body.qty },
            { new: true }
        );

        if (!updateQTY) {
            return res.status(404).json({
                success: 0,
                message: "Cart item not found"
            });
        }

        // Respond with success message and the updated cart item details
        res.json({
            success: 1,
            message: "Quantity updated successfully",
            updateQTY
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: 0, message: "Internal Server Error" });
    }
};