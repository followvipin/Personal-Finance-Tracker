const { time } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = require('./User')

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  time: { type: Date, default: Date.now },
  description: { type: String },
  paymentMethod: {type: String, required: true},
  owner: {type: String, required: true},
  ownerId: {type: mongoose.Schema.Types.ObjectId, ref: userSchema }
  
});

module.exports = mongoose.model('Transaction', transactionSchema);