'use strict';

var path = require('path');
var logger = require('console');
var browserify = require('browserify-middleware');
var express = require('express');
var app = express();

// middleware non-js static files
app.use(express.static('../client/public'));

// Serve a browserified file for GET /bundle.js
app.get('/scripts/bundle.js', browserify('../client/count.js'));


app.get('/', function(req, res){
  res.render('../client/public/index.html');
});

var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening on port", port);