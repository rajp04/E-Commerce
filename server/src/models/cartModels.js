const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        userIdForSave: {
            type: String
        },
        productIdForSave: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        qty: {
            type: Number,
            default: 1
        }
    },
    { timestamps: true }
)

exports.Cart = mongoose.model("Cart", cartSchema);