const orderSchema = require("../models/orderModels.js")
const Order = orderSchema.Order;


// Controller function to handle order 
module.exports.order = async (req, res) => {
    try {

        const { productId, userId, firstName, lastName, email, mobile, country, address, city, state, postalCode } = req.body;

        const result = await Order.create({
            productId,
            userId,
            firstName,
            lastName,
            email,
            mobile,
            address,
            country,
            city,
            state, postalCode
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


// Get Order Data By User Id
module.exports.getOrderData = async (req, res) => {
    try {
        const id = req.params.id
        // Retrieve all products from the database using the Product model
        const result = await Order.find({ userId: id })

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


// Get All Order Data
module.exports.getAllOrderData = async (req, res) => {
    try {
        const result = await Order.find()

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


// Update Status in Order
module.exports.updateStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const { status } = req.body; // Extract the status string from the object

        // Ensure status is a string
        const statusString = typeof status === 'string' ? status : (status && status.status);

        const result = await Order.updateOne({ _id: id }, { $set: { status: statusString } });

        res.json({
            success: 1,
            message: "Update Successfully",
            result
        });
    } catch (error) {
        res.status(500).json({
            success: 0,
            error: error.message
        });
    }
}
