const { compare } = require("bcrypt");
const userSchema = require("../models/userModels.js");
const { sendOtp } = require("../utils/sendOTP.js");
const User = userSchema.User;

// Register Controller 
module.exports.register = async (req, res) => {
  try {
    // Destructure values from the request body
    const { fullName, email, mobile, password } = req.body;

    // Check if any required fields are missing
    if (!fullName || !email || !password || !mobile) {
      return res.json({
        success: 0,
        message: "All fields are required",
      });
    }

    // Check if the user is already registered by checking mobile number
    const existUser = await User.findOne({ mobile });
    if (existUser) {
      return res.json({
        success: 0,
        message: "User already exists",
      });
    }

    // Create a new user in the database
    const result = await User.create({
      fullName,
      email,
      mobile,
      password
    })

    // Respond with success message and additional information
    res.json({
      success: 1,
      message: "User registered successfully",
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
};


// Login Controller
module.exports.login = async (req, res) => {
  try {
    const { password, mobile } = req.body;

    // Check if either email or mobile is provided
    if (!password && !mobile) {
      return res.json({
        success: 0,
        message: "Please Enter the Mobile Number and Password"
      });
    }

    // Find user by email or mobile
    const user = await User.findOne({ mobile });

    // If user not found, throw error
    if (!user) {
      return res.json({ success: 0, message: "Invalid credentials" });
    }

    // User are check block 
    if (user.block === 1) {
      return res.json({
        success: 0,
        message: "Your account is blocked. Please contact support.",
      });
    }

    // // Check if password is valid
    const isPassword = await user.isPasswordCorrect(password);

    // If password is not valid, throw error
    if (!isPassword) {
      return res.json({ success: 0, message: "Invalid credentials" });
    }

    // Update last login
    const update = await User.updateOne(
      { _id: user._id },
      { $set: { lastLogin: new Date() } }
    );

    if (update.modifiedCount !== 1) {
      throw new Error("Failed to update last login");
    }

    // Fetch logged in user details
    const loggedInUser = await User.findById(user._id).select("-password -__v");

    return res.json({
      success: 1,
      message: "Login Successful",
      loggedInUser
    })
  } catch (error) {
    // Log the error message for debugging
    res.json({
      success: 0,
      message: "Controller Error: " + error.message,
    });
  }
};


// Update User Controller
module.exports.updateUser = async (req, res) => {
  try {
    // Extract user ID from the request parameters
    const userId = req.params.id;

    // Find and update the user details in the database
    const updateUser = await User.findByIdAndUpdate(userId, {
      fullName: req.body.fullName,
      email: req.body.email,
      mobile: req.body.mobile,
    });

    // Respond with success message and the updated user details
    res.json({
      success: 1,
      message: "User updated successfully",
      updateUser
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);
    res.status(500).json({ success: 0, message: "Internal Server Error" });
  }
};


// Update Password Controller
module.exports.updatePassword = async (req, res) => {
  try {
    const { password, newPassword } = req.body;
    // Extract user ID from the request parameters
    const userId = req.params.id;

    if (!password || !newPassword) {
      return res.json({
        success: 0,
        message: "Please provide current password and new passwords.",
      });
    }

    // Correct the variable name from 'id' to 'userId'
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.json({
        success: 0,
        message: "User not found.",
      });
    }

    // Check if password is valid
    const isPassword = await user.isPasswordCorrect(password);

    // If password is not valid, throw error
    if (!isPassword) {
      return res.json({ success: 0, message: "Invalid credentials" });
    }

    if (password === newPassword) {
      return res.json({
        success: 0,
        message: "Please enter a new password you have not used before.",
      });
    } else {
      // Update the password in the database
      user.password = newPassword;
      await user.save();

      return res.json({
        success: 1,
        message: "Password updated successfully.",
      });
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);

    // Handle other internal server errors
    res.status(500).json({ success: 0, message: "Internal Server Error: Error updating password" });
  }
};


// Delete User Controller
module.exports.deleteUser = async (req, res) => {
  try {
    // Extract user ID from the request parameters
    const id = req.params.id;

    // Attempt to delete the user with the provided ID
    const result = await User.deleteOne({ _id: id });

    // Respond with success message after successful deletion
    res.json({ success: 1, message: "User deleted successfully." });
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


// Get All Users Data Controller
module.exports.usersData = async (req, res) => {
  try {
    // Fetch all users from the database
    const usersData = await User.find().select('-password');

    // Respond with the retrieved users' data
    res.json(usersData);
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);

    // Handle other internal server errors
    res.status(500).json({ success: 0, message: "Internal Server Error: Error retrieving users' data" });
  }
};


// Get User Data By Id Controller
module.exports.userByID = async (req, res) => {
  try {
    // Extract user ID from the request parameters
    const id = req.params.id;

    // Find user details in the database based on the user ID
    const result = await User.findById({ _id: id }).select('-password');

    // Respond with success message and the user details
    res.json({
      success: 1,
      message: "User Details",
      data: result,
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);

    // Handle other internal server errors
    res.status(500).json({
      success: 0,
      message: "Internal Server Error: Error retrieving user details",
    });
  }
};


// Define the avatar controller function
module.exports.avatar = async (req, res) => {
  // Extract the user ID from the request parameters
  const id = req.params.id;

  // Construct the avatar URL using the uploaded file's filename
  const avatar = `http://localhost:5555/public/temp/${req.file.filename}`;

  try {
    // Update the user document with the new avatar URL
    const result = await User.updateOne({ _id: id }, { $set: { avatar } });

    // Check if the update was successful
    if (result) {
      // Respond with a success message and the updated avatar URL
      return res.json({
        success: 1,
        message: "Update Avatar Successfully",
        result
      });
    }
  } catch (error) {
    // Handle any errors that occur during the update process
    console.error(error);
    res.status(500).json({ success: 0, message: "Internal Server Error" });
  }
};


//User Blocked by admin
module.exports.userBlock = async (req, res) => {
  const id = req.params.id;
  try {
    // Find the user by ID
    const users = await User.findById({ _id: id });

    // Check if the user exists
    if (users) {
      if (users.block == true) {
        // If user is currently blocked, unblock them
        await User.updateOne(
          { _id: id },
          { $set: { block: false } }
        );
        return res.json({
          message: "User Blocked.",
        });
      } else {
        // If user is currently unblocked, block them
        await User.updateOne(
          { _id: id },
          { $set: { block: true } }
        );
        return res.json({
          message: "User Unblocked.",
        });
      }
    }
  } catch (err) {
    return res.json({
      success: 0,
      message: "Error in code.",
    });
  }
};


// Forget Password
module.exports.forgetPassword = async (req, res) => {
  try {
    const { mobile, otp, password } = req.body;

    // Check if all required fields are provided
    if (!mobile || !password || !otp) {
      return res.json({
        success: 0,
        message: "All fields are required",
      });
    }

    // Check password length
    if (password.length < 6) {
      return res.json({
        success: 0,
        message: "Password must be at least 6 characters"
      });
    }

    // Find user by mobile number
    let user = await User.findOne({ mobile });

    if (!user) {
      return res.json({
        success: 0,
        message: "Invalid Mobile Number",
      });
    }

    // Check if OTP provided by the user matches the OTP stored in the user document
    if (user.otp != otp) {
      return res.json({
        success: 0,
        message: "Invalid Otp",
      });
    }

    // Update user's password
    user.password = password;

    // Set OTP to null after successful password change
    user.otp = null;

    await user.save(); // Save the user document with the new password and null OTP

    return res.json({
      success: 1,
      message: "Password reset successfully",
    });

  } catch (error) {
    return res.json({
      success: 0,
      message: error.message,
    });
  }
}


// Otp Send Controller
module.exports.sendOtp = async (req, res) => {
  const { mobile } = req.body;

  if (!mobile) {
    return res.json({
      success: 0,
      message: "Mobile number is required",
    });
  }

  try {
    // Find user by mobile number
    const user = await User.findOne({ mobile });

    if (!user) {
      return res.json({
        success: 0,
        message: "User not found",
      });
    }

    // Generate a new OTP code
    const newOtp = Math.floor(100000 + Math.random() * 900000);

    // Send the OTP via SMS
    const isSent = await sendOtp(mobile, newOtp);

    // Check if the OTP was successfully sent
    if (!isSent) {
      return res.status(500).json({ success: 0, message: "Error in sending OTP" });
    }

    // Update the user's OTP in the database
    user.otp = newOtp;
    await user.save();

    // Respond with success message if everything went smoothly
    return res.json({
      success: 1,
      message: "OTP sent successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the OTP generation and sending process
    console.error(error);
    return res.status(500).json({ success: 0, message: "Internal Server Error" });
  }
}