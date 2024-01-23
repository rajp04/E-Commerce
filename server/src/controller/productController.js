const productSchema = require("../models/productModels.js")
const Product = productSchema;

// Add Product Controller
module.exports.addProduct = async (req, res) => {
    try {
        // Destructure the required fields from the request body
        const { productName, description, category, material, styles, size, price } = req.body;

        // Check if any of the required fields is missing
        if (!productName || !description || !category || !material || !styles || !size || !price)
            return res.json({
                success: 0,
                message: "All fields are required",
            });

        // Construct the product image URL using the uploaded file
        const image = `http://localhost:5555/public/temp/${req.file.filename}`;

        // Create a new product using the Product model
        const product = await Product.create({
            productName,
            description,
            category,
            material,
            image,
            styles,
            size,
            price
        });

        // Respond with success message and status 200
        res.status(200).json({
            success: 1,
            message: "Product added successfully",
            product
        });

    } catch (error) {
        // Handle any errors that occur during the process
        console.error(error);
        res.status(500).json({
            success: 0,
            message: "Internal server error"
        });
    }
};


// All Product Controller
module.exports.product = async (req, res) => {
    try {
        // Retrieve all products from the database using the Product model
        const result = await Product.find();

        // Respond with a success message and the retrieved products
        res.status(200).json({
            success: 1,
            result
        });

    } catch (error) {
        // Handle any errors that occur during the process
        console.error(error);

        // Respond with an error message and status 400
        res.status(400).json({
            success: 0,
            message: 'Error in fetching products'
        });
    }
};