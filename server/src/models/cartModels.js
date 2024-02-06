const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        productId: {
            type: String
        }
    },
    { timestamps: true }
)

exports.Cart = mongoose.model("Cart", cartSchema);