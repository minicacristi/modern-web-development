const express = require('express');
const path = require('path');
const port = 3010;
var app = express();

// file server with express that serves files from node_modules
app.use(express.static(path.join(__dirname, '../../node_modules'), {
  maxAge: 24 * 60 * 60 * 1000
}));

// try this in the browser
// http://localhost:3010/express/Readme.md

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});