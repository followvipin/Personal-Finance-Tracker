const { time } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  time: { type: Date, default: Date.now },
  description: { type: String },
  paymentMethod: {type: String, required: true},
  owner: {type: String, required: true},
});

module.exports = mongoose.model('Transaction', transactionSchema);