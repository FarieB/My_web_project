require('dotenv').config();
const express = require('express');
const authMiddleware = require('./models/authMiddleware');
const app = express();

// Debugging log to verify environment variables
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

// Middleware and routes setup
app.use(express.json()); // Middleware for parsing JSON

// Debugging log to verify server start
console.log("Server is starting...");

// Example route using the authMiddleware
app.use('/api/protected', authMiddleware, (req, res) => {
    res.json({ msg: 'Access granted to protected route!' });
});

// Example public route without authentication
app.get('/api/public', (req, res) => {
    res.json({ msg: 'Public route, no authentication needed' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

