const dataBase = require('mysql2/promise');

class DBManager {

    // Initialize the DBManager
    constructor(config)
    {
        this.config = config;
        this.connection = null; // Initialize the connection property
    }

    // Connecting to the DB
    async connect()
    {
        this.connection = await dataBase.createConnection(this.config);
        console.log('Connected to the database');
    }

    // Creating the DB
    async createDatabase()
    {
        // Establishing connection
        const connection = await dataBase.createConnection({
            host: this.config.host,
            port: this.config.port,
            user: this.config.user,
            password: this.config.password
        });

        // Creating a DB if not exists.
        try
        {
            // Creating a database named SongsDB
            await connection.query('CREATE DATABASE IF NOT EXISTS SongsDB');
            console.log('Database created successfully');
        }
        catch (error)
        {
            console.error('Error creating database:', error);
        }
        // Terminating the connection regardless the outcome.
        finally
        {
            await connection.end();
        }
    }

    // Creating a table of the songs in the DB,
    // and adding songs to it if it already exists.
    async createSongsTableFromSongsArray(songs)
    {
        // Connection was not established
        if (!this.connection)
        {
            await this.connect();
        }

        // Creating the table if it wasn't created yet.
        const createTableQuery = `
        CREATE TABLE IF NOT EXISTS songs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        songName VARCHAR(255) NOT NULL,
        band VARCHAR(255) NOT NULL,
        year INT NOT NULL
        );
    `   ;

        await this.connection.query(createTableQuery);

        // Insert songs into the table
        for (const song of songs)
        {
            await this.insertSongIfNotExists(song);
        }

        console.log("Created songs table from songs array");
    }

    // Adding a song to the table if it wasn't inserted yet.
    async insertSongIfNotExists(song)
    {
        if (!this.connection)
        {
            await this.connect();
        }

        const checkQuery = "\
        SELECT * FROM songs WHERE songName = ? AND band = ? AND year = ?";

        const [rows] = await this.connection.query(checkQuery, [song.songName, song.band, song.year]);

        // No result was returned which means that we should add the song to the table.
        if (rows.length === 0)
        {
            const insertQuery = "\
            INSERT INTO songs (songName, band, year) VALUES (?, ?, ?)";

            await this.connection.query(insertQuery, [song.songName, song.band, song.year]);

            console.log("Inserted song: " + song.songName);
        }
        else
        {
            console.log("Song already exists: " + song.songName);
        }
    }

    async disconnect()
    {
        await this.connection.end;

        console.log("Disconnected from the DB");
    }

}

module.exports = DBManager;
