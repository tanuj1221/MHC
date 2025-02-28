const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// HTML routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

// Handle all other routes to support SPA if needed
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

// Listen on port 80 (requires sudo)
const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});