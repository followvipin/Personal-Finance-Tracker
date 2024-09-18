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


app.get(
  '/myInfo/:id/',
  async(req,res)=>{
      try {
          const { id } = req.params;
          const documents = await User.find({ "_id": id });

          if (!documents.length) {
              return res.status(404).json({ message: 'No documents found' });
          }

          res.status(200).json(documents);
      } catch (error) {
          console.error('Error fetching documents:', error);
          res.status(500).json({ message: 'Internal Server Error' });
      }
      

  }
);

module.exports = app;