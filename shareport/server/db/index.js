const mongoose = require('mongoose');

const { MONGOUN, MONGOPW } = require('../../db-config.js');

const mongoURI = `mongodb://${MONGOUN}:${MONGOPW}@mongodb:27017`;

mongoose.connect(mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  dbName: 'portfolios',
})
  .then(() => {
    console.log('mongo connection established');
  })
  .catch((error) => {
    console.log(`mongo connect error on ${mongoURI}`);
    console.log(error);
  });

const db = mongoose.connection;

db
  .then(() => {
    console.log(`connected to mongoose`);
  })
  .catch((err) => {
    console.log(`error connecting to mongoose`);
    console.log(err);
  });

module.exports = db;
