const express = require('express');
const router = express.Router();
const querystring = require('querystring');
const axios = require('axios');
const {getPlaylists, votePlaylist} = require('../playlistModel');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get("/getPlaylists", function(req, res) {
    
    getPlaylists((err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to get playlists' });
        }
        console.log(result);
        res.json(result);
      })
});

router.post("/like", function(req, res) {
  
    const {playlistId} = req.body;
    
    votePlaylist(playlistId, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server error');
        return;
      }
      console.log("like 2");
      res.status(200).json({ message: 'Vote count incremented', results });
    });
  
});


module.exports = router;