const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true, // Ensure that a user ID is always provided
    },
    menu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
    },
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
