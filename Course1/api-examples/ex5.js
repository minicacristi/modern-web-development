const express = require('express');
const bp = require('body-parser');
const fs = require('fs');

const BOOKS_FILE = 'books.json';
const port = 3001;
var app = express();
app.use(bp.json());

// sync mode
var books;
try {
  var booksBuffer = fs.readFileSync(BOOKS_FILE);
  // init the books array
  books = JSON.parse(booksBuffer);
} catch (err) {
  // if there is no file
  // init the memory array
  books = [];
  // create the file
  fs.closeSync(fs.openSync(BOOKS_FILE, 'a+'));
}

// async/callback mode
const saveToFile = (file, array, done) => {
  fs.writeFile(file, JSON.stringify(array), done);
};

app.get('/book', (req, res) => {
  res.json(books);
});

app.post('/book', (req, res) => {
  books.push(req.body);
  saveToFile(BOOKS_FILE, books, (err) => {
    if (err)
      return res.status(500).send();
    return res.json(books);
  });
});

app.delete('/book/:id', (req, res) => {
  // remove element at position id
  let index = parseInt(req.params.id);
  books.splice(index, 1);
  // save to file the modifications
  saveToFile(BOOKS_FILE, books, (err) => {
    if (err)
      return res.status(500).send();
    return res.json(books);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});