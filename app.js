//
// this assumes that npm package express has been installed.
//


var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World! Well...I prefer to saying Hi there in the USA these days...:-) ');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
