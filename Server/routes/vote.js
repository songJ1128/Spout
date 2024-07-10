const express = require('express');
const router = express.Router();
const querystring = require('querystring');
const axios = require('axios');
const {getPlaylists} = require('../playlistModel');

router.get("/getPlaylists", function(req, res) {
    console.log("writ 1")
    getPlaylists((err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to add playlist' });
        }
        console.log(result);
        res.json(result);
      })
});

module.exports = router;