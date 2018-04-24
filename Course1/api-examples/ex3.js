const express = require('express');
const bp = require('body-parser');
const port = 3001;
// create express app
var app = express();

// register json body parser such that we can parse
// bodies with application/json header
app.use(bp.json());

// init the memory array that will hold the books
var books = [];

// mount get route
app.get('/book', (req, res) => {
  // respond with a json of books
  res.json(books);
});

// mount post route
app.post('/book', (req, res) => {
  // req body is properly parsed because of bp.json ^
  books.push(req.body);
  res.json(books);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});