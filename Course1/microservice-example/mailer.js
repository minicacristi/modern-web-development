const express = require('express');
const port = 3002;
let app = express();

app.post('/mail', (req, res) => {
  console.log('Sending email!');
  res.send('Sent email to: ' + req.query.email);
});

app.listen(port, () => {
    console.log(`Mailer listening on port ${port}`);
});