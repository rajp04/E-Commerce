const orderSchema = require("../models/orderModels.js")
const Order = orderSchema.Order;


// Controller function to handle order 
module.exports.order = async (req, res) => {
    try {
        // Destructure required fields from request body
        const { price, qty, productId, userId } = req.body;

        // Check if any required fields are missing
        if (!price || !qty || !productId || !userId) {
            return res.status(400).json({
                success: 0,
                message: "All fields are required",
            });
        }

        // Check if the order already exists for the user and product combination
        const existOrder = await Order.findOne({ userId, productId });
        if (existOrder) {
            return res.status(400).json({
                success: 0,
                message: "Order already exists",
            });
        }

        // Calculate the order price after discount
        const calculatedPrice = price * qty;
        const calculatedOrderPrice = calculatedPrice - disCount;

        // Create the order with provided data
        const data = await Order.create({
            price,
            qty,
            productId,
            userId,
            totalPrice: calculatedPrice,
            orderPrice: calculatedOrderPrice
        });

        res.status(201).json({
            success: 1,
            message: 'Order placed successfully',
            data
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            error: error.message
        });
    }
};
