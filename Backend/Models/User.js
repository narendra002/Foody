const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String, // You can use a specific type like ObjectId or customize as needed
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
   
  },
  address: {
    type: String,
   
  },
  // Orders field as an array of references to order documents
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
