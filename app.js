var express = require('express');
var app = express();

// Configure Routes
app.get('/', function(req, res){
 res.send('Hello World! - From Root');
});
app.get('/about', function(req, res){
 res.send('Hello World! - From About');
});

// Start Server at Port 50000 
var server = app.listen(50000, function(){
 var port = server.address().port;
 var host = server.address().address;
 console.log("My Server has started with host %s at port number %s", host, port);
 //console.log(server);
});