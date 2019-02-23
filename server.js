const express = require('express');
const app = express();
const path = require('path');
const hostname = '127.0.0.1'
const port = 3000


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

/* 
//	PERSONAL PAGES ROUTES 
*/

// routed to Rowvin's Profile
app.get('/rowvin', function(req, res) {
    res.sendFile(path.join(__dirname + '/personalPages/Rowvin.html'));
});

// routed to Jonathan's Profile
app.get('/Jonathan', function(req, res) {
    //console.log("button was clicked")
    res.sendFile(path.join(__dirname + '/personalPages/Jonathan.html'));
});

// routed to Kayla's Profile
app.get('/Kayla', function(req, res) {
    res.sendFile(path.join(__dirname + '/personalPages/Kayla.html'));
});

// routed to Daisy's Profile
app.get('/Daisy', function(req, res) {
    res.sendFile(path.join(__dirname + '/personalPages/Daisy.html'));
});

// routed to Minho's Profile
app.get('/Minho', function(req, res) {
    res.sendFile(path.join(__dirname + '/personalPages/Minho.html'));
});

// routed to Rene's Profile
app.get('/Rene', function(req, res) {
    res.sendFile(path.join(__dirname + '/personalPages/Rene.html'));
});

// routed to Marlon's Profile
app.get('/Marlon', function(req, res) {
    res.sendFile(path.join(__dirname + '/personalPages/Marlon.html'));
});




// so we can just click on the server link
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})