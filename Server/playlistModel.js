const db = require('./db');

const getPlaylists = (callback) => {
  const query = 'SELECT * FROM playlists ORDER BY RAND() LIMIT 2';
  db.query(query, (err, results) => {
    if (err) return callback(err);
    const playlistIds = results.map(playlist => playlist.id);
    updateCounters(playlistIds, (updateErr) => {
      if (updateErr) return callback(updateErr);
      callback(null, results);
    });
  });
};

const updateCounters = (playlistIds, callback) => {
  if (playlistIds.length === 0) {
    return callback(null);
  }
  const updateQuery = 'UPDATE playlists SET counter = counter + 1 WHERE id IN (?)';
  db.query(updateQuery, [playlistIds], (err) => {
    if (err) return callback(err);
    callback(null);
  });
};


  const addPlaylist = (playlistName, playlist, callback) => {
    
    const currentDate = new Date().toISOString().slice(0, 10);
  
    console.log("this 1");
    const query = 'INSERT INTO playlists (name, tracks, date) VALUES (?, ?, ?)';
    console.log("this 2");
    const values = [playlistName, JSON.stringify(playlist), currentDate];
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

  const votePlaylist = (playlistId, callback) => {
    console.log(playlistId);
    const query = 'UPDATE playlists SET likes = likes + 1 WHERE id = ?';
    db.query(query, [playlistId], (err, results) => {
      if (err) {
        return callback(err);
      }

      callback(null, results);
    });
  };

module.exports = {
    getPlaylists,
    addPlaylist,
    votePlaylist
  };