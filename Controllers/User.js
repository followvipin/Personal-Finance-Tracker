const express = require("express");
const app = express.Router();
const User = require("../Models/User");
const JwtBearerMiddleware = require("../Auth/JwtBearer");

app.post("/user/", async (req, res) => {
  const user = new User({
    full_name: req.body.full_name,
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
  });
  try {
    const existing_username = await User.findOne({ user_name: user.user_name });

    if (existing_username) {
      res
        .status(400)
        .json({ message: "An account already exists with this username." });
    } else {
      const existing_user = await User.find({
        $or: [{ email: user.email }, { phoneNumber: user.phoneNumber }],
      });

      if (existing_user.length > 0) {
        res.status(400).json({
          message:
            "An account already exists with the provided email or phone number.",
        });
      } else {
        const newUser = await user.save();
        res.status(201).json(newUser);
      }
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/myInfo/:id/", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the found user
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: "Server error" });
  }
});

const secretKey = "66e5c7b247d3271faa089cad"; // Your secret key
const jwtMiddleware = new JwtBearerMiddleware(secretKey);

app.get("/protected/", jwtMiddleware.authenticate, async (req, res) => {
  res.json();
});

module.exports = app;
