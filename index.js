const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./Controllers/User');
const transactionRoutes = require('./Controllers/Transaction');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('MongoDB connection error:', error));

// Use routes
app.use('/', userRoutes);
app.use('/', transactionRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Example of a POST route
// app.post('/data', (req, res) => {
//   const data = req.body;
//   res.status(201).json({
//       message: 'Data received successfully!',
//       data: data
//   });
// });


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
