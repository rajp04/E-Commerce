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
            type: String
        },
    },
    { timestamps: true }
)

exports.Cart = mongoose.model("Cart", cartSchema);