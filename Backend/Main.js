const reader = require('./Model/FileReader');

const DBManager = require('./Controller/DBManager');

// Database configuration
const dbConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'OrSN',
    password: '',
    database: 'SongsDB'
};

// Exporting the dbConfig for reuse and consistency purposes.
module.exports = dbConfig;


async function main()
{
    let songs = [];

    try
    {
        songs = await reader.readFileAndParse();
    }
    catch (error)
    {
        console.error('Error reading and parsing the file:', error);
    }

    const dbManager = new DBManager(dbConfig);

    // Connect to the database
    await dbManager.createDatabase();

    // Create the songs table and insert songs
    await dbManager.createSongsTableFromSongsArray(songs);

    await dbManager.disconnect();

    //process.exit();
}

main();
