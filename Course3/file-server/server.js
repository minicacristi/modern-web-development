const express = require('express');
const path = require('path');
const morgan = require('morgan');

const port = 3010;
var app = express();

// using morgan logger middleware to see the served files.
app.use(morgan('dev'));

// serves files from node_modules.
app.use(express.static(path.join(__dirname, '../../node_modules'), {
  maxAge: 24 * 60 * 60 * 1000
}));

// serve static files from Course3.
app.use(express.static(path.join(__dirname, '../'), {
  maxAge: 24 * 60 * 60 * 1000
}));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
