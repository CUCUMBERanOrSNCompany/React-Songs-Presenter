const express = require('express');
const cors = require('cors');
const songsRoute = require('../routes/songsRoute');

// Defining a class responsible for setting up the server.
class ServerManager
{
    constructor(dbConfig)
    {
        this.app = express();
        this.port = 3000;

        this.setupMiddlewares();
        this.setupRoutes();
    }

    // To learn more about CORS:
    // https://expressjs.com/en/resources/middleware/cors.html
    setupMiddlewares()
    {
        this.app.use(cors());
    }

    // Setting up the route to the Songs fetcher from the DB.
    setupRoutes()
    {
        this.app.use('/', songsRoute);
    }

    // Starting the server.
    startServer()
    {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

module.exports = ServerManager;
