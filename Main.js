const reader = require('./FileReader.js');

async function main()
{
    let songs = [];

    try
    {
        songs = await reader.readFileAndParse();

    } catch (error)
    {
        console.error('Error reading and parsing the file:', error);
    }

    console.log(songs);
}

main();