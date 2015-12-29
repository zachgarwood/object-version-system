var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/object-version-system');

var server = express();
server.use(express.static(__dirname + '/dist'));
server.use(function(request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    next();
});
server.use(bodyParser.json());

require('./server/routes')(server);

var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('Listening at http://localhost:%s', port);
});
