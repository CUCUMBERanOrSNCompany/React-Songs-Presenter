import React, { useState, useEffect } from 'react';

function App() {
    const [songs, setSongs] = useState([]);

    console.log('App component rendered');

    useEffect(() => {
        fetch('/api/songs')
            .then(response => {
                console.log('Raw response:', response);
                return response.json();
            })
            .then(data => {
                console.log('Parsed data:', data);
                setSongs(data);
            })
            .catch(error => console.error('Error fetching songs:', error));
    }, []);

    return (
        <div>
            <h1>Songs List</h1>
            <table>
                <thead>
                <tr>
                    <th>Song Name</th>
                    <th>Band</th>
                    <th>Year</th>
                </tr>
                </thead>
                <tbody>
                {songs.map(song => (
                    <tr key={song.id}>
                        <td>{song.songName}</td>
                        <td>{song.band}</td>
                        <td>{song.year}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
