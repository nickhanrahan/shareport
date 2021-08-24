const express = require('express');

const port = 3000;

const app = express();

app.use(express.json());

app.use(express.static('client/dist'));

app.get('/portfolios', (req, res) => {
  res.status(200);
  res.send('get portfolios');
});

app.get('/portfolios/:id', (req, res) => {
  const { id } = req.params;
  res.status(200);
  res.send(`get details for ${id}`);
});

app.post('/portfolios', (req, res) => {
  console.log(req.body);
  res.status(201);
  res.send('post');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
