const mongoose = require('mongoose');
const { MONGOUN, MONGOPW } = require('../../db-config.js');

const mongoURI = `mongodb://${MONGOUN}:${MONGOPW}@mongodb-shareport:27017/portfolios`;

mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db
  .then(() => {
    console.log(`connected to ${mongoURI}`);
  })
  .catch((err) => {
    console.log(`error connecting to ${mongoURI}`);
    console.log(err);
  });

module.exports = db;
