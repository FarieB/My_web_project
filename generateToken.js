const jwt = require('jsonwebtoken');
require('dotenv').config();

const payload = {
    user: {
        id: '12345', // Sample user ID
        name: 'John Doe' // Sample user name
    }
};

const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
console.log('Generated Token:', token);

