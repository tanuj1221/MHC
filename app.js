const express = require('express');
const path = require('path');
const app = express();

// Serve static files - IMPORTANT: These paths should be relative to where your app.js is located
app.use(express.static(path.join(__dirname, 'public')));  // Add this line

// Your routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});