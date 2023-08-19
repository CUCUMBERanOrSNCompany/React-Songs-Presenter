const reader = require('./Model/FileReader');

const DBManager = require('./Controller/DBManager');

const ServerManager = require('./Server/ServerManager');

const dbConfig = require('./Entities/DBConfig');


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

    const serverManager = new ServerManager();
    serverManager.startServer();
}

main();