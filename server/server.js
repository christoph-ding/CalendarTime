// Dependencies
var express = require('express');
var path = require('path');

// Server
var app = express();
var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Time to make a calendar!"  + '\n' + 'path: ' + app.path() + '\n' + '__dirname:' + __dirname);
});

// Static Files
app.use(express.static(path.resolve(__dirname + '/../client')));

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname + '/../client/pages/')})
});
