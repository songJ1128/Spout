const db = require('./db');

const getPlaylists = (callback) => {
    const query = 'SELECT * FROM playlists ORDER BY RAND() LIMIT 2';
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  };


  const addPlaylist = (playlistName, playlist, callback) => {
    console.log("this 1");
    const query = 'INSERT INTO playlists (name, tracks) VALUES (?, ?)';
    console.log("this 2");
    const values = [playlistName, JSON.stringify(playlist)];
    console.log("this 3");
    db.query(query, values, (err, results) => {
      if (err) {
        console.log("Error right here", playlist, playlistName);
        return callback(err);
      }
      callback(null, results);
    });
    console.log("this 4");
  };

module.exports = {
    getPlaylists,
    addPlaylist
  };