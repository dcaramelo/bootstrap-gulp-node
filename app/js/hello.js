var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! For test')
})

module.exports = app;
