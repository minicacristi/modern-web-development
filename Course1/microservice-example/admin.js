const express = require('express');
const port = 3003;

let app = express();
let counter = 0;

app.post('/admin/count', (req, res) => {
  ++counter;
  console.log('Counting!' + counter);
  res.json({
    count: counter
  });
});

app.listen(port, () => {
    console.log(`admin listening on port ${port}`);
});