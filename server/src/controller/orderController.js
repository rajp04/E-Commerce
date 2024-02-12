const orderSchema = require("../models/orderModels.js")
const Order = orderSchema.Order;


// Controller function to handle order 
module.exports.order = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            success: 0,
            error: error.message
        });
    }
};
