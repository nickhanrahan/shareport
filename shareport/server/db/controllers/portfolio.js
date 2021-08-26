const Portfolio = require('../model/portfolio.js');

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

const getPortfolios = (req, res) => {
  Portfolio.find({})
    .then((portfolios) => {
      res.status(200);
      res.send(portfolios);
    });
};

module.exports = {
  createPortfolio,
  getPortfolios,
};
