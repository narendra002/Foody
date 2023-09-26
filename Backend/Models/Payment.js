const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a 'User' model
    required: true,
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order', // Assuming you have an 'Order' model
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
    unique: true, // Assuming transaction IDs should be unique
  },
  paymentDate: {
    type: Date,
    default: Date.now, // Defaults to the current date and time
  },
});

module.exports = mongoose.model('Payment', PaymentSchema);
