const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {
        productId: {
            type: Array,
            required: true
        },
        status: {
            type: String,
            default: 'Pending'
        },
    },
    { timestamps: true }
)

exports.Order = mongoose.model("Order", orderSchema)