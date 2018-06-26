const express = require('express');
const bp = require('body-parser');
const port = process.env.PORT || 3001;
const routes = require('./src/routes/main');

var app = express();

app.use(bp.json());
app.use(routes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});