const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {
        productId: {
            type: String
        },
        userId: {
            type: String
        },
        price: {
            type: Number
        },
        qty: {
            type: Number
        },
        status: {
            type: String,
            default: 'Pending'
        },
    },
    { timestamps: true }
)

exports.Order = mongoose.model("Oder", orderSchema)