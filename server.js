var express = require('express');
var serveStatic = require('serve-static');

app = express();

let lightBulb = '#303030';

app.get('/', (req, res) => {
  return res.send(lightBulb);
});

app.put('/on', (req, res) => {
  lightBulb = 'yellow'
  return res.sendStatus(200)
});

app.put('/off', (req, res) => {
  lightBulb = '#303030'
  return res.sendStatus(200)
});

app.put('/color', (req, res) => {
  lightBulb = req.body
  return res.sendStatus(200)
});

app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server listening on: '+ port);
