// Responsible for running the server.

const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const songsRoute = require('../routes/songsRoute');

// Use the cors middleware to enable CORS for all routes
app.use(cors());

// Use the songs route
app.use('/', songsRoute);

// Start the Express server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
