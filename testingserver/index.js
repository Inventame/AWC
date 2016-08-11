var express = require("express"),
	path = require("path"),
	app = new express(),
	port = 3000,
	serveIndex = require('serve-index'),
	errorhandler = require('errorhandler'),
	publicPath = '../';

app
//allowing cross domain rquest
.use( function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
})
//active error handler
.use( errorhandler() )
//listing files and directories
.use( express.static(publicPath) )
.use( serveIndex(publicPath) )
.listen( port, function(){
	console.log( "Using public path:  ",publicPath );
	console.log( "Server initiate on port ",port );
} );