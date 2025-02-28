const express = require('express');
const path = require('path');
const app = express();

// Set base URL for assets
const baseURL = process.env.NODE_ENV === 'production' ? 'http://mhctrafficindia.com' : '';

// Serve static files with absolute paths
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'html')));

// Handle all routes to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});