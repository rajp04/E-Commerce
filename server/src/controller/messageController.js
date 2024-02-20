const messageSchema = require("../models/messageModels.js")
const Message = messageSchema.Message;

// Message Controller
module.exports.message = async (req, res) => {
    try {

        const { senderId, receiverId, message } = req.body;

        const result = await Message.create({ senderId, receiverId, message })
        // Respond with success message and additional information
        res.json({
            success: 1,
            message: "Message Send successfully",
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


// Get Receiver Message Controller
module.exports.getmessage = async (req, res) => {
    try {

        const id = req.params.id
        const result = await Message.find({ receiverId: id })
        // Respond with success message and additional information
        res.json({
            success: 1,
            message: "Get Receiver Data successfully",
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


// Get Sender Message Controller
module.exports.getmessagedata = async (req, res) => {
    try {

        const id = req.params.id
        const result = await Message.find({ senderId: id })
        // Respond with success message and additional information
        res.json({
            success: 1,
            message: "Get Sender Data successfully",
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