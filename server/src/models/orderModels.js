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
            type: Number
        },
        orderPrice: {
            type: Number
        },
        disCount: {
            type: Number,
            default: 60
        },
        totalPrice: {
            type: Number
        }
    },
    { timestamps: true }
)

exports.Order = mongoose.model("Oder", orderSchema)