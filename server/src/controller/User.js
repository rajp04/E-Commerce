const userSchema = require("../models/User.js");
const User = userSchema;

// register controller
module.exports.register = async (req, res) => {
  try {
    const { fullName, email, mobile, password, avatar, otp, block } = req.body;
    if (!fullName && !email && !password && !mobile) {
      return res.json({
        success: 0,
        message: "All fields are required",
      });
    }

    // Check if the user already exists
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.json({
        success: 0,
        message: "User already exists",
      });
    }

    // Create the user
    await User.create({
      fullName,
      email,
      mobile,
      password,
      avatar,
      otp,
      block,
    });

    res.json({
      success: 1,
      message: "User registered successfully",
    });
  } catch (error) {
    // Log the error message for debugging
    res.json({
      success: 0,
      message: "Controller Error: " + error.message,
    });
  }
};

// login controller
module.exports.login = async (req, res) => {
  try {
    const { mobile, password } = req.body;

    const user = await User.findOne({ mobile, password });

    if (user) {
      res.json({ success: 1, message: "Login successful" });
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
};

// update profile controller
module.exports.updateProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    const updateUser = await User.findByIdAndUpdate(userId, {
      fullName: req.body.fullName,
      email: req.body.email,
      mobile: req.body.mobile,
    });
    res.json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: 0, message: "Internal Server Error" });
  }
};

// change password controller
module.exports.changePassword = async (req, res) => {
  try {
    const userId = req.params.id;

    const ChangePassword = await User.findByIdAndUpdate(userId, {
      password: req.body.password,
    });
    res.json(ChangePassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: 0, message: "Internal Server Error" });
  }
};

// profile controller
module.exports.profile = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (user) {
      res.json({ success: 1, message: "Profile found", user });
    } else {
      res.status(401).json({ success: 0, message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: 0, message: "Internal Server Error" });
  }
};

// user data controller
module.exports.usersData = async (req, res) => {
  try {
    const usersData = await User.find();
    res.json(usersData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: 0, message: "Internal Server Error" });
  }
};
