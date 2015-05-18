'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var Handlebars = require('handlebars');

var app = express();

var template = Handlebars.compile(
  fs.readFileSync(path.join(__dirname, '/templates/index.hbs')).toString()
);

// Serve static assets as is (such as css and js).
app.use(express.static(path.join(__dirname, '/../public')));

app.get(/^\/(.*)/, function (req, res) {
  res.send(template({
    locale: req.path.match(/\/en\//) ? 'en' : 'ja'
  }));
});

console.log('Server listening to port 5000...');
app.listen(5000);
