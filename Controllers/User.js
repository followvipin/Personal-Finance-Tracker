const express = require("express");
const app = express.Router();
const User = require('../Models/User');

app.post("/user/", async (req, res) => {
  const user = new User({
    full_name: req.body.full_name,
    user_name: req.body.user_name,
    account_balance: req.body.account_balance,
    cash_amount: req.body.cash_amount,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = app;