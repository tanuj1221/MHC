const express = require('express');
const path = require('path');
const app = express();

// Add console logs to debug static file serving
console.log('CSS directory:', path.join(__dirname, 'css'));
console.log('JS directory:', path.join(__dirname, 'js'));
console.log('Images directory:', path.join(__dirname, 'images'));
console.log('HTML directory:', path.join(__dirname, 'html'));

// Add middleware to log all requests
app.use((req, res, next) => {
    console.log('Request URL:', req.url);
    next();
});

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'html')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});