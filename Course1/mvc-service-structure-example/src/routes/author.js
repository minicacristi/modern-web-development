const Router = require('express').Router;
const AuthorController = require('../controllers/author');
let bookModel = require('../model/book');
var authorRoutes = new Router();

// injecting the book model in the author instance
var authorControllerIns = new AuthorController(bookModel);

authorRoutes.get('/', (req, res) => {
  res.json(authorControllerIns.getAuthors());
});

module.exports = authorRoutes;