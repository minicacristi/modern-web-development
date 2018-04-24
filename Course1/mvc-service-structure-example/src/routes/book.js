const Router = require('express').Router;
const BookController = require('../controllers/book');
let bookModel = require('../model/book');
var bookRoutes = new Router();

// injecting the book model in the controller instance
var bookControllerIns = new BookController(bookModel);

bookRoutes.get('/', (req, res) => {
  res.json(bookControllerIns.getBooks());
});

bookRoutes.post('/', (req, res) => {
  bookControllerIns.addBook(req.body);
  res.status(201).end();
});

bookRoutes.delete('/', (req, res) => {
 const status = bookControllerIns.deleteBook(req.query.isbn);
 res.status(status).end();
});

module.exports = bookRoutes;