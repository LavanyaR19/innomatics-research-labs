const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');  // Ensure this import is correct

const app = express();

// Middleware
app.use(express.json()); 

// Routes
app.use('/api/users', userRoutes);  // Ensure this line is present

// Default route to check server status
app.get('/', (req, res) => {
    res.send("API is running...");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



