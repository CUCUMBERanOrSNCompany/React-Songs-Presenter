// Importing the File System module
const fs = require('fs');

const Song = require('./Song');

const filePath = 'F-S Test - T02 - 2023 - Song_list.csv';

fs.readFile(filePath, 'utf8', (err, data) =>
    {
        if (err)
        {
            console.error('Error reading the file:', err);
            return;
        }

        // Separating the songs to lines.
        const lines = data.trim().split('\n');

        // Separating each line to the pieces of information required to create a Song object.
        const [songNameHeader, bandHeader, yearHeader] = lines[0].split(';');

        const songs = [];

        // Creating the array of songs.
        for (let i = 1; i < lines.length; i++)
        {
            const [songName, band, year] = lines[i].split(';');
            const song = new Song(
                songName.toLowerCase().trim(),
                band.toLowerCase().trim(),
                year.toLowerCase().trim());

            songs.push(song);
        }

        //console.log(songs)

    });

//console.log(songs)






