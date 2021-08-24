const axios = require('axios');

const getPortfolios = () => {
  axios.get('/portfolios')
    .then((list) => {
      console.log(list.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDetails = (id) => {
  axios.get(`/portfolios/${id}`)
    .then((details) => {
      console.log(details.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const postPortfolio = (newPortfolio) => {
  axios.post('/portfolios', newPortfolio)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getPortfolios,
  getDetails,
  postPortfolio,
};
