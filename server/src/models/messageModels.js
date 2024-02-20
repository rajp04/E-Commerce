const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: String
        },
        receiverId: {
            type: String
        },
        message: {
            type: String
        },
    },
    { timestamps: true }
)

exports.Message = mongoose.model("Message", messageSchema);