const express = require('express');
const router = express.Router();
const querystring = require('querystring');
const axios = require('axios');
const {getAccessToken} = require('../tokenManager');

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
        limit: '5',
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.json(response.data.tracks.items);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch data from Spotify API' });
  }
});

module.exports = router;
