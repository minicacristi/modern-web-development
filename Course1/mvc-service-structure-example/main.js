const express = require('express');
const bp = require('body-parser');

const routes = require('./src/routes/main');

var app = express();

app.use(bp.json());
app.use(routes);

app.listen(3001, () => {
  console.log('listening on port 3001');
});