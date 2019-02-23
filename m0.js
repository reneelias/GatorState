var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

/* 
//	PERSONAL PAGES ROUTES 
*/

// routed to Rowvin's Profile
app.get('/rowvin', function(req, res) {
    res.sendFile(path.join(__dirname + '/personalPages/rowvin.html'));
});

// routed to Jonathan's Profile
app.get('/jonathan', function(req, res) {
    //console.log("button was clicked")
    res.sendFile(path.join(__dirname + '/personalPages/jonathan.html'));
});

// routed to Kayla's Profile
app.get('/kayla', function(req, res) {
    res.sendFile(path.join(__dirname + '/personalPages/kayla.html'));
});

// routed to Daisy's Profile
app.get('/daisy', function(req, res) {
    res.sendFile(path.join(__dirname + '/personalPages/daisy.html'));
});

// routed to Minho's Profile
app.get('/minho', function(req, res) {
    res.sendFile(path.join(__dirname + '/personalPages/minho.html'));
});

// routed to Rene's Profile
app.get('/rene', function(req, res) {
    res.sendFile(path.join(__dirname + '/personalPages/rene.html'));
});

// routed to Marlon's Profile
app.get('/marlon', function(req, res) {
    res.sendFile(path.join(__dirname + '/personalPages/marlon.html'));
});

app.listen(8080);