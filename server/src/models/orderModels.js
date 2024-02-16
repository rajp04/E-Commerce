const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        cartId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cart"
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
        status: {
            type: String,
            default: 'Pending'
        },
    },
    { timestamps: true }
)

exports.Order = mongoose.model("Order", orderSchema)