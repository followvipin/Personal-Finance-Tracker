const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    user_name: { type: String, required: true },
    account_balance: { type: Number, required: true},
    cash_amount: { type: Number, required: true },
    expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'transactionSchema',required: false }],
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: {type: String, required: true}
})

module.exports = mongoose.model('User', userSchema);
