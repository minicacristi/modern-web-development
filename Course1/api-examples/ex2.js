const express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Hello world express!');
});

// listen to port 3002 for http requests
app.listen(3002, () => {
    console.log('listening on port 3002');
});