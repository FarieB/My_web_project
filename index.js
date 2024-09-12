const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Load JSON data
const dataFilePath = path.join(__dirname, 'data.json');
const insuranceData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

// Endpoint to get insurance data
app.get('/api/insurance', (req, res) => {
  res.json(insuranceData);
});

// Define the /api/compare route
app.get('/api/compare', (req, res) => {
  const { productType, company } = req.query;

  if (!productType || !company) {
    return res.status(400).json({ error: 'Missing productType or company query parameters' });
  }

  // Find the selected product type
  const products = insuranceData[productType];
  if (!products) {
    return res.status(404).json({ error: `No product type found for ${productType}` });
  }

  // Find the selected company within the product type
  const selectedProduct = products.find(p => p.name === company);
  if (!selectedProduct) {
    return res.status(404).json({ error: `No company found with name ${company}` });
  }

  // Return the selected company's data
  res.json(selectedProduct);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

