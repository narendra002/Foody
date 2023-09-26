const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  restaurant: { // Changed field name to "restaurant" for consistency
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant', // Assuming the reference model name is 'Restaurant'
    required: true,
  },
  items: [
    {
      menu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu', // Assuming the reference model name is 'Menu'
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1, // Default quantity to 1
      },
      price: {
        type: Number,
        required: true,
        default: 1, // Default price to 1
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  address: { // Changed field name to "address" for consistency
    type: String,
    required: true,
  },
  orderState: {
    type: String,
    required: true,
    default: 'none', // Default value 'none'
  },
});

module.exports = mongoose.model('Order', OrderSchema);
