const productSchema = require("../models/productModels.js")
const Product = productSchema;

// Add Product Controller
module.exports.addProduct = async (req, res) => {
    try {
        // Destructure the required fields from the request body
        const { productName, description, category, material, styles, size, price, stock } = req.body;

        // Check if any of the required fields is missing
        if (!productName || !description || !category || !material || !styles || !size || !price || !stock)
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
            price,
            stock
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


// Get All Product Controller
module.exports.product = async (req, res) => {
    try {

        const page = parseInt(req.query.page);
        const size = parseInt(req.query.size);

        const skip = (page - 1) * size;

        const total = await Product.countDocuments();
        // Retrieve all products from the database using the Product model
        const result = await Product.find().skip(skip).limit(size);

        // Respond with a success message and the retrieved products
        res.status(200).json({
            success: 1,
            result,
            total,
            page,
            size
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


// Update Product Controller
module.exports.updateProduct = async (req, res) => {
    const id = req.params.id;

    const { productName, description, category, material, styles, size, price, stock } = req.body;

    const file = req.file?.filename

    if (!productName || !description || !category || !material || !styles || !size || !price || !stock) {
        return res.status(401).json({ error: 'All fields are required' });
    }

    try {
        let updatedProduct;
        if (file != undefined) {
            const image = `http://localhost:5555/public/temp/${file}`
            updatedProduct = await Product.updateMany(
                { _id: id },
                {
                    $set: {
                        productName,
                        description,
                        category,
                        material,
                        styles,
                        size,
                        price,
                        stock,
                        image // Assuming req.file.image is the correct property
                    }
                },
                { new: true } // This option returns the updated document
            );
        }
        else {
            updatedProduct = await Product.updateMany(
                { _id: id },
                {
                    $set: {
                        productName,
                        description,
                        category,
                        material,
                        styles,
                        size,
                        price,
                        stock
                    }
                },
                { new: true } // This option returns the updated document
            );
        }


        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({
            success: 1,
            message: "Product updated successfully",
            updatedProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// Delete Product Controller
module.exports.deleteProduct = async (req, res) => {
    try {
        // Extract user ID from the request parameters
        const id = req.params.id;

        // Attempt to delete the user with the provided ID
        const result = await Product.deleteOne({ _id: id });

        // Respond with success message after successful deletion
        res.json({ success: 1, message: "Product deleted successfully." });
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);

        // Handle other errors and respond with an appropriate message
        res.status(500).json({
            success: 0,
            message: "Internal Server Error: Error in user deletion process.",
        });
    }
};


// Get Product By Id
module.exports.getProduct = async (req, res) => {
    id = req.params.id
    // Retrieve products from the database using the Product model
    const result = await Product.findById({ _id: id });

    // Respond with a success message and the retrieved products
    res.status(200).json({
        success: 1,
        result
    });
}


// Update quantity of cart item
module.exports.updateQTY = async (req, res) => {
    try {
        const id = req.params.id;

        // Find the cart item by its ID and update its quantity
        const updateQTY = await Product.findByIdAndUpdate(id,
            { qty: req.body.qty },
            { new: true }
        );

        if (!updateQTY) {
            return res.status(404).json({
                success: 0,
                message: "Cart item not found"
            });
        }

        // Respond with success message and the updated cart item details
        res.json({
            success: 1,
            message: "Quantity updated successfully",
            updateQTY
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: 0, message: "Internal Server Error" });
    }
};