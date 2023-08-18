// Responsible for running the server.

const express = require('express');
const app = express();
const songsRoute = require('../routes/songsRoute');

// Use the songs route
app.use('/', songsRoute);

// Start the Express server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
