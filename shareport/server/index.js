const express = require('express');
const axios = require('axios');
const { APIKEY } = require('./fmp-config.js');

const port = 3000;

const app = express();

app.use(express.json());

app.use(express.static('client/dist'));

app.get('/search/:query', (req, res) => {
  const { query } = req.params;
  axios.get(`https://financialmodelingprep.com/api/v3/search?query=${query}&limit=5&apikey=${APIKEY}`)
    .then((iexdata) => {
      res.status(200);
      res.send(iexdata.data);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
});

app.get('/portfolios', (req, res) => {
  res.status(200);
  res.send('get portfolios');
});

app.get('/portfolios/:id', (req, res) => {
  const { id } = req.params;
  res.status(200);
  res.send(`get details for ${id}`);
});

app.post('/portfolios', (req, res) => {
  console.log(req.body);
  res.status(201);
  res.send('post');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
