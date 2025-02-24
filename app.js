// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// Create an Express application
const app = express();
app.use(bodyParser.json())
// Define routes
const productsRoute = require('./routes/index');
app.use(productsRoute);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabaseserver', {
}).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
