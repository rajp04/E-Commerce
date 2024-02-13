const orderSchema = require("../models/orderModels.js")
const Order = orderSchema.Order;


// Controller function to handle order 
module.exports.order = async (req, res) => {
    try {

        const { price, qty, userId } = req.body;

        const result = await Order.create({
            userId,
            price,
            qty
        })

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
