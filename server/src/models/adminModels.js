const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const adminschema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);

adminschema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 10);
    next();
});

adminschema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const Admin = mongoose.model("Admin", adminschema);
module.exports = Admin;