// DEPENDENCIES
var http = require('http');
var express = require('express');

// INSTANTIATE
var app = express();

// PORTS 
if ('production' == app.get('env')) {
  app.set('port', process.env.PORT || 5000);
} else {
  app.set('port', process.env.PORT || 5000);
};

// ROUTES
app.get('/', function(req,res) {
  res.end('InDesign Extension Node.js App') // output text
});

// SERVER
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});