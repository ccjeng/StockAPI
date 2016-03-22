//var compression = require('compression')
var express = require('express');
var request = require('request');

var app = express();

//app.use(compression());

app.get('/q/:symbols', function (req, res) {
   
	var quoteUrl = 'http://www.google.com/finance/info?infotype=infoquoteall&q=' + req.params.symbols;
   
   	request(quoteUrl, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        res.end( body.replace("//","") );
	     } else {
	     	res.end( 'error' );
	     }
	});
})


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 80
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
});

// Launch server
/*
var port = process.env.PORT || 8080;
    , ip = process.env.IP || "127.0.0.1";

app.listen(port, function() {
  console.log("Listening on " + port);
});
*/