const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');

// create database connection
mongoose.connect('mongodb://localhost:27017/testdb');
mongoose.set('debug', true);

// import routes
const routes = require('./src/routes/main');

// create express object
var app = express();

// load json parser
app.use(bp.json());

// load routes
app.use(routes);

app.listen(3001, () => {
  console.log('listening on port 3001');
});