const axios = require('axios');
const Portfolio = require('../model/portfolio.js');
const { APIKEY } = require('../../fmp-config.js');

const createPortfolio = (req, res) => {
  const holdingsArray = req.body.holdings.map((holding) => ({
    symbol: holding.symbol,
    name: holding.name,
    exchange: holding.exchange,
    basisPrice: holding.price,
    costBasis: holding.marketValue,
    numberOfShares: holding.numberOfShares,
  }));
  const newPortfolio = new Portfolio({
    name: req.body.name,
    username: req.body.username,
    risk: req.body.risk,
    thesis: req.body.thesis,
    totalCost: req.body.totalValue,
    holdings: holdingsArray,
  });
  newPortfolio.save()
    .then(() => {
      res.status(201);
      res.send('success');
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
};

const promisedQuote = (holding) => new Promise((resolve, reject) => {
  axios.get(`https://financialmodelingprep.com/api/v3/quote/${holding.symbol}?apikey=${APIKEY}`)
    .then((quote) => {
      resolve(quote);
    })
    .catch((err) => {
      reject(err);
    });
});

const requestQuote = (symbol) => new Promise((resolve, reject) => {
  axios.get(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${APIKEY}`)
    .then((quote) => {
      const quoteObj = {
        price: quote.data[0].price,
        dayChange: quote.data[0].change,
        dayChangePct: quote.data[0].changesPercentage,
      };
      resolve(quoteObj);
    })
    .catch((err) => {
      reject(err);
    });
});

const formatHoldings = (holdingsArray) => {
  const holdingsRequests = holdingsArray.map((holding) => new Promise((resolve, reject) => {
    requestQuote(holding.symbol)
      .then((quote) => {
        let holdingObj = {
          _id: holding._id,
          symbol: holding.symbol,
          name: holding.name,
          exchange: holding.exchange,
          basisPrice: holding.basisPrice,
          costBasis: holding.costBasis,
          numberOfShares: holding.numberOfShares,
          quote,
        };
        resolve(holdingObj);
      })
      .catch((err) => {
        reject(err);
      });
  }));
  return holdingsRequests;
};

const formatPortfolios = (portfoliosArray) => {
  const requestedPortfolios = portfoliosArray.map((portfolio) => new Promise((resolve, reject) => {
    let portfolioObj = {
      _id: portfolio._id,
      name: portfolio.name,
      username: portfolio.username,
      risk: portfolio.risk,
      thesis: portfolio.thesis,
      totalCost: portfolio.totalCost,
      createdAt: portfolio.createdAt,
    };
    Promise.all(formatHoldings(portfolio.holdings))
      .then((formattedHoldings) => {
        portfolioObj.holdings = formattedHoldings;
        resolve(portfolioObj);
      })
      .catch((err) => {
        reject(err);
      });
  }));
  return requestedPortfolios;
};

const getPortfolios = (req, res) => {
  Portfolio.find({})
    .then((portfolios) => {
      Promise.all(formatPortfolios(portfolios))
        .then((formattedPortfolios) => {
          res.status(200);
          res.send(formattedPortfolios);
        })
        .catch((err) => {
          res.status(404);
          res.send(err);
        });
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
};

module.exports = {
  createPortfolio,
  getPortfolios,
};
