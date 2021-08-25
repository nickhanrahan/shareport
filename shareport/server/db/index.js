const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/portfolios';

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
