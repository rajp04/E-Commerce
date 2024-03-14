const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
const addressSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    country: {
        type: String,
    },
    streetAddress: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zip: {
        type: String,
    },
});

// Export the model
const Address = mongoose.model('Address', addressSchema);
module.exports = Address