/* SETUP HERE
// ---------------
// This section will setup all dependencies and variables required to run the server.
*/

// Express
const express = require('express');
const app = express();

// BodyParser
const bodyParser = require('body-parser')

// Server info
const path = require('path');
const hostname = '127.0.0.1'
const port = 3000

// PostgresQL
const db = require('./queries');

/* MAIN LOGIC HERE
// ---------------
// This section will serve all the main function and attributes we'll use in the server
*/

// bodyParser logic
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

/*
//  About Page Redirect
*/
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

/*
//  Search Page Redirect
*/
app.get('/search', function(req, res) {
    res.sendFile(path.join(__dirname + '/search.html'));
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
