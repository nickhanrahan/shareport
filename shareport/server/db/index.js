const mongoose = require('mongoose');

const { MONGOUN, MONGOPW } = require('../../db-config.js');

const mongoURI = `mongodb://${MONGOUN}:${MONGOPW}@mongodb:27017/portfolios`;

mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('mongo connection established');
  })
  .catch((error) => {
    console.log(`mongoose connect error on ${mongoURI}`);
    console.log(error);
  });

const db = mongoose.connection;

db
  .then(() => {
    console.log(`connected to database`);
  })
  .catch((err) => {
    console.log(`error connecting to database`);
    console.log(err);
  });

module.exports = db;
