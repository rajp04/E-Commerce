const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        mobile: {
            type: Number,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        avatar: {
            type: String,
            default: 'https://res.cloudinary.com/dtdlad1ud/image/upload/v1703938887/y18sqhaus4snghlhcscm.jpg',
        },
        otp: {
            type: Number,
            default: null,
        },
        block: {
            type: Boolean,
            default: false,
        },
        address: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address"
        },
        lastLogin: {
            type: String,
            default: null
        },
        otpExpires: {
            type: String,
            default: null
        },
    },
    { timestamps: true }
);

//  Password hashing
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

// Compare The Password of Login
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

exports.User = mongoose.model("User", userSchema);