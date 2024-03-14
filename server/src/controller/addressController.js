const Address = require("../models/addressModels.js");

// Address Controller 
module.exports.address = async (req, res) => {
  try {

    const id = req.params.id

    // Destructure values from the request body
    const { firstName, lastName, email, mobile, country, streetAddress, city, state, zip } = req.body;

    // Check if any required fields are missing
    if (!firstName || !email || !lastName || !mobile || !country || !streetAddress || !city || !state || !zip) {
      return res.json({
        success: 0,
        message: "All fields are required",
      });
    }

    // Create a new user address in the database
    const result = await Address.create({
      _id: id, firstName, lastName, email, mobile, country, streetAddress, city, state, zip
    });

    // Respond with success message and additional information
    res.json({
      success: 1,
      message: "User Address created successfully",
      result
    });
  } catch (error) {
    // Log the error message for debugging
    res.json({
      success: 0,
      message: "Controller Error: " + error.message,
    });
  }
};


// Update Address Controller
module.exports.adressUpdate = async (req, res) => {
  try {
    // Extract user ID from the request parameters
    const userId = req.params.id;

    // Find and update the user details in the database
    const updateUser = await Address.findByIdAndUpdate(userId, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      mobile: req.body.mobile,
      country: req.body.country,
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
    });

    // Respond with success message and the updated user details
    res.json({
      success: 1,
      message: "User Address updated successfully",
      updateUser
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);
    res.status(500).json({ success: 0, message: "Internal Server Error" });
  }
};


// Get Address By Id
module.exports.addressByID = async (req, res) => {
  try {
    // Extract user ID from the request parameters
    const id = req.params.id;

    // Find user details in the database based on the user ID
    const result = await Address.findById({ _id: id });

    // Respond with success message and the user details
    res.json({
      success: 1,
      message: "Address Details",
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