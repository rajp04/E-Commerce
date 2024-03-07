const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {
        productId: {
            type: Array,
            // required: true
        },
        userId: {
            type: String,
            // required: true
        },
        status: {
            type: String,
            default: 'Pending',
            enum: ['Pending', 'Delivery']
        }
    },
    { timestamps: true }
)

exports.Order = mongoose.model("Order", orderSchema)