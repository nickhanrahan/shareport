const express = require('express');
const axios = require('axios');
const db = require('./db/index.js');
const { APIKEY } = require('./fmp-config.js');
const { createPortfolio, getPortfolios } = require('./db/controllers/portfolio.js');

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

app.get('/quote/:symbol', (req, res) => {
  const { symbol } = req.params;
  axios.get(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${APIKEY}`)
    .then((quote) => {
      res.status(200);
      res.send(quote.data[0]);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
});

app.get('/portfolios', getPortfolios);

app.get('/portfolios/:id', (req, res) => {
  const { id } = req.params;
  res.status(200);
  res.send(`get details for ${id}`);
});

app.post('/portfolios', createPortfolio);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
