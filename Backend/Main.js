const reader = require('./Model/FileReader');

const DBManager = require('./Controller/DBManager');

const ServerManager = require('./Server/ServerManager');

const dbConfig = require('./Entities/DBConfig');

// Calling all tasks related to backend
async function main()
{
    let songs = [];

    // Reading the songs file
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

    // Disconnecting from the Database, once completed DB related tasks
    await dbManager.disconnect();

    // Setting up the server
    const serverManager = new ServerManager();
    serverManager.startServer();
}

main();