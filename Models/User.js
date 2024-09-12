const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    user_name: { type: String, required: true },
    account_balance: { type: Number, required: true},
    cash_amount: { type: Date, default: Date.now },
    expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'transactionSchema' }],
    email: { type: String, required: true },
    password: { type: String, required: true },
})