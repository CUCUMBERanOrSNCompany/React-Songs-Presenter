// Returning the songs table sorted by band name, from the DB.

const express = require('express');
const router = express.Router();
const dataBase = require('mysql2/promise');
//const dbConfig = require('../Main');

const dbConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'OrSN',
    password: '',
    database: 'SongsDB'
};

// Define a route to fetch songs from the DB
router.get('/api/songs', async (req, res) => {
    try
    {
        // Create a connection to the database using dbConfig settings
        const connection = await dataBase.createConnection(dbConfig);

        // Fetch songs from the "songs" table and sort by band name
        const query = 'SELECT * FROM songs ORDER BY band;';
        const [rows] = await connection.query(query);

        // Close the connection
        await connection.end();

        // Send the songs data as a response
        console.log(rows)
        res.json(rows);
    }
    catch (error)
    {
        console.error('Error fetching songs:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
