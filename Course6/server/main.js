const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
// create database connection
mongoose.connect('mongodb://localhost:27017/testdb');
mongoose.set('debug', true);

// import routes
const routes = require('./src/routes/main');

// create express object
var app = express();

// enable cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// load json parser
app.use(bp.json());

// load routes
app.use(routes);

// serves files from node_modules.
app.use(express.static(path.join(__dirname, '../../node_modules'), {
  maxAge: 24 * 60 * 60 * 1000
}));

// serve static files from client.
app.use(express.static(path.join(__dirname, '../client'), {
  maxAge: 24 * 60 * 60 * 1000
}));

app.listen(3001, () => {
  console.log('listening on port 3001');
});