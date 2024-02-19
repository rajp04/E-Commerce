const orderSchema = require("../models/orderModels.js")
const Order = orderSchema.Order;


// Controller function to handle order 
module.exports.order = async (req, res) => {
    try {

        const { data } = req.body;
        console.log(data)

        const result = await Order.create(
            {
                productId: data
            }
        )

        res.json({
            success: 1,
            message: "Order Successfully",
            result
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            error: error.message
        });
    }
};


// Get Order Data
module.exports.getOrderData = async (req, res) => {
    try {
        const id = req.params.id
        // Retrieve all products from the database using the Product model
        const result = await Order.find({ userId: id }).populate("cartId").select("-createdAt -__v")

        res.json({
            success: 1,
            message: "Get Order Successfully",
            result
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            error: error.message
        });
    }
}