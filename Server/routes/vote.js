const express = require('express');
const router = express.Router();
const querystring = require('querystring');
const axios = require('axios');
const {getPlaylists} = require('../playlistModel');

router.get("/getPlaylists", function(req, res) {
    
    getPlaylists((err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to get playlists' });
        }
        
        res.json(result);
      })
});

module.exports = router;