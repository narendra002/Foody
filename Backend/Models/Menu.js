const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    menuName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    category: { // Changed field name from "Category" to "category"
        type: String,
        required: true,
    },
    img: { // Changed field name from "Img" to "img"
        type: String,
        required: true,
    },
    restaurant: { // Corrected field name to "restaurant" to match your reference
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant', // Use 'Restaurant' as the reference model name
    },
});

module.exports = mongoose.model('Menu', MenuSchema);
