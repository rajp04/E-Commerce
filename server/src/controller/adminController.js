const adminSchema = require("../models/adminModels")
const Admin = adminSchema

// Admin Register Controller
module.exports.register = async (req, res) => {
    try {
        // Destructure values from the request body
        const { fullName, email, password } = req.body;

        // Check if any required fields are missing
        if (!fullName || !email || !password) {
            return res.json({
                success: 0,
                message: "Both fields are required",
            });
        }

        // Check if the user is already registered by checking mobile number
        const existUser = await Admin.findOne({ email });
        if (existUser) {
            return res.json({
                success: 0,
                message: "Admin already exists",
            });
        }

        // Create a new user in the database
        const result = await Admin.create({
            fullName,
            email,
            password
        });

        // Respond with success message and additional information
        res.json({
            success: 1,
            message: "Admin registered successfully",
            result
            // It seems like there's an extra 'message' key here. I assume it's unintentional.
        });
    } catch (error) {
        // Log the error message for debugging
        res.json({
            success: 0,
            message: "Controller Error: " + error.message,
        });
    }
}

// Admin Login Controller
module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email, password });

        if (admin) {
            res.json({ success: 1, message: "Login successful", admin });
        } else {
            res.status(401).json({ success: 0, message: "Invalid credentials" });
        }
    } catch (error) {
        // Log the error message for debugging
        res.json({
            success: 0,
            message: "Controller Error: " + error.message,
        });
    }
}