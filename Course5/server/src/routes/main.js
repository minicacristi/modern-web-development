const Router = require('express').Router;

const authorRoutes = require('./author');
const bookRoutes = require('./book');

var mainRouter = new Router();

// mounting the routes on their specific endpoints
mainRouter.use('/author', authorRoutes);
mainRouter.use('/book', bookRoutes);

module.exports = mainRouter;