const express = require('express');
const router = express.Router();
const querystring = require('querystring');
const axios = require('axios');
const {setAccessToken} = require('../tokenManager');

const client_id = "8122ce77ec5f4fc89284286d8bc38f9b";
const redirect_uri = "http://localhost:8080/auth/callback";
const client_secret = "931bce2994ca436fbb300ffb13d469fe";

function generateRandomString(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

router.get("/login", function (req, res) {
  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';
  
  res.json({url: 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    })});
});

router.get('/callback', async function(req, res) {
  var code = req.query.code || null;
  var state = req.query.state || null;

  if (state === null) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    try {
      const response = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify({
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      }), {
        headers: {
          'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      const { access_token, refresh_token } = response.data;
      setAccessToken(access_token);
      // Store the tokens securely
      token = access_token;
      
      res.redirect('http://localhost:3000/home');
    } catch (error) {
      console.error('Error fetching access token:');
      res.redirect('/#' +
        querystring.stringify({
          error: 'invalid_token'
        }));
    }
  }
});

module.exports = router;