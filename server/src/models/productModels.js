const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    styles: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: null
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number
    }
},
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;