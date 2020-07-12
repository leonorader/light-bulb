var express = require('express');
var serveStatic = require('serve-static');

app = express();

let lightBulb = '#303030';

app.get('/api/bulb/colour', (req, res) => {
  return res.send(lightBulb);
});

app.put('/api/bulb/on', (req, res) => {
  lightBulb = 'yellow'
  return res.sendStatus(200)
});

app.put('/api/bulb/off', (req, res) => {
  lightBulb = '#303030'
  return res.sendStatus(200)
});

app.put('/api/bulb/colour', (req, res) => {
  lightBulb = req.body
  return res.sendStatus(200)
});

app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server listening on: '+ port);
