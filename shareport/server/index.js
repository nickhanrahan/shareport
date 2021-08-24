const express = require('express');
const port = 3000;

const app = express();

app.use(express.json());

app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log('listening on port ' + port);
})