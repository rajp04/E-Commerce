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
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String
        },
        country: {
            type: String
        },
        mobile: {
            type: Number
        },
        address: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        postalCode: {
            type: Number
        },
    },
    { timestamps: true }
)

exports.Order = mongoose.model("Order", orderSchema)