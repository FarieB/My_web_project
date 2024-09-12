// app.js

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Load JSON data
const dataFilePath = path.join(__dirname, 'data.json');
const insuranceData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

// Endpoint to get insurance data
app.get('/api/insurance', (req, res) => {
  res.json(insuranceData);
});

// Add other routes and middleware as necessary
// Example: Serve static files
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

