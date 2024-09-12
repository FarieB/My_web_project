const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware for parsing JSON if needed
app.use(express.json());

// Load insurance data from data.json
function loadInsuranceData() {
  const dataPath = path.join(__dirname, 'data.json');
  const rawData = fs.readFileSync(dataPath);
  return JSON.parse(rawData);
}

// Define the /api/compare route
app.get('/api/compare', (req, res) => {
  const { productType, company } = req.query;

  if (!productType || !company) {
    return res.status(400).json({ error: 'Missing productType or company query parameters' });
  }

  // Load the data from data.json
  const insuranceData = loadInsuranceData();

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

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

