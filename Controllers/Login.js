const express = require('express');
const app = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
//const bcrypt = require('bcryptjs');

app.post('/login', async (req, res) => {
    const { user_name, password } = req.body;

    try {
        const user = await User.findOne({ user_name });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const JWT_SECRET = '66e5c7b247d3271faa089cad';

        const token = jwt.sign(
            { id: user._id, username: user.username }, 
            JWT_SECRET, 
            { expiresIn: '1h' } 
        );

        console.log('User found');
        res.status(200).json({
            message: 'User found',
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = app;