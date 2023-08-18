// Importing the file system
const fs = require('fs');

const Song = require('./Song');

const filePath = 'F-S Test - T02 - 2023 - Song_list.csv';

// Reading the file and parse it
function readFileAndParse() {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            // Parsing the file to rows
            const lines = data.trim().split('\n');

            const [songNameHeader, bandHeader, yearHeader] = lines[0].split(';');

            const songs = [];

            for (let i = 1; i < lines.length; i++)
            {
                // Parsing each row to its pieces of information
                const [songName, band, year] = lines[i].split(';');

                // Creating a song object, and lowering the case of all characters.
                const song = new Song(
                    songName.toLowerCase().trim(),
                    band.toLowerCase().trim(),
                    year.toLowerCase().trim()
                );

                // Adding the song to the array
                songs.push(song);
            }

            resolve(songs);
        });
    });
}

module.exports = {
    readFileAndParse
};







