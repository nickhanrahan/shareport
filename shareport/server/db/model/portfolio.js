const mongoose = require('mongoose');

const holdingSchema = mongoose.Schema({
  symbol: String,
  name: String,
  exchange: String,
  basisPrice: Number,
  costBasis: Number,
  numberOfShares: Number,
});

const portfolioSchema = mongoose.Schema({
  name: String,
  username: String,
  risk: String,
  thesis: String,
  totalCost: Number,
  holdings: [holdingSchema],
},
{
  timestamps: true,
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
