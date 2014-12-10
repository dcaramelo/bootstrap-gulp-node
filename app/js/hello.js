var express = require('express')
    , nodemon = require('gulp-nodemon')

var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

module.exports = app;
