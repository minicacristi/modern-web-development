const fs = require('fs');
const request = require('request');
const express = require('express');
const bp = require('body-parser');

const configContent = fs.readFileSync(__dirname  + '/config.json');
const config = JSON.parse(configContent);

const BOOK_SERVICE_URL = config.bookservice;
const MAILER_SERVICE_URL = config.mailerservice;
const ADMIN_SERVICE_URL = config.adminservice;

const port = 3004;

let app = express();
app.use(bp.json());

app.post('/orchestrate', (req, res) => {
  request.post(BOOK_SERVICE_URL, {
    uri: 'http://localhost:3002',
    headers: {'content-type' : 'application/json'},
    body: JSON.stringify(req.body)
  }, (err, bookres, body) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error posting book!');
    }
    res.send('Done!');
    
    request.post(MAILER_SERVICE_URL, {}, (err, mailerres, body) => {
      if (err)
        console.error('Error mailing author!');
      else 
        console.log('Sent email!');
    });
    
    request.post(ADMIN_SERVICE_URL, {}, (err, adminres, body) => {
      if (err)
        console.error('Error counting book!');
      else 
        console.log('Counted book!');
    });
  });
});

app.listen(port, () => {
  console.log(`Orchestrator listening on port ${port}`);
});