const express = require('express');
const bp = require('body-parser');
const fs = require('fs');

const BOOKS_FILE = 'books.json';
const port = 3001;
var app = express();
app.use(bp.json());

// sync mode
var books;

// try to see if we can read the file
try {
  var booksBuffer = fs.readFileSync(BOOKS_FILE);
  // init the books array
  books = JSON.parse(booksBuffer);
} catch (err) {
  // if there is no file
  // init the memory array
  books = [];
  // create the file
  fs.closeSync(fs.openSync(BOOKS_FILE, 'w'));
}

app.get('/book', (req, res) => {
  res.json(books);
});

app.post('/book', (req, res) => {
  books.push(req.body);
  // saving to a file in async mode
  fs.writeFile(BOOKS_FILE, JSON.stringify(books), (err) => {
    if (err)
      return res.status(500).send();
    return res.json(books);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});