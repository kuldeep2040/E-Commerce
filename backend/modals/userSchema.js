const mongoose = require('mongoose');

// Define the Product schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  
  date: {
    type: Date,
    default: Date.now
  },
});

// Create or retrieve the Product model
const Users = mongoose.models.User || mongoose.model('Users', userSchema);

module.exports = Users;
