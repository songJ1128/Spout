const express = require('express');
const router = express.Router();
const querystring = require('querystring');
const axios = require('axios');
const bodyParser = require('body-parser');
const {getAccessToken} = require('../tokenManager');
const {addPlaylist} = require('../playlistModel');

router.use(express.json());

router.get('/', async (req, res) => {
    const query = req.query.q;

  if (!query) {
    return res.status(400).send({ error: 'Query parameter is required' });
  }

  try {
    const token = getAccessToken();
    const response = await axios.get('https://api.spotify.com/v1/search?', {
      params: {
        q: query,
        type: 'track',
        limit: 8,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const tracks = response.data.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      preview_url: track.preview_url,
      image: track.album.images[0] ? track.album.images[0].url : null,
    }));
    //console.log(response.data.tracks.items);
    res.json(tracks);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch data from Spotify API' });
  }
});

router.post('/addPlaylist', (req, res) => {
  const {playlistName, playlist} = req.body;
  console.log("muma 1");
  addPlaylist(playlistName , playlist, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to add playlist' });
    }
    res.json({ message: 'Playlist added successfully' });
  });
});


module.exports = router;
