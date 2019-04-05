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
const db = require('./components/queries/queries');

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

app.use(express.static(__dirname + '/components'));

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

/*
//  About Page Redirect
*/
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/components/about/about.html'));
});

app.get('/users', db.getUsers);
app.get('/listings', db.getListings);

/*
//  Search Page Redirect
*/
app.get('/search', function(req, res) {
    res.sendFile(path.join(__dirname + '/components/search/search.html'));
    // console.log(db.getUsers()); 
});

/* 
//	PERSONAL PAGES ROUTES
//  WE COULD POTENTIALLY GET RID OF THESE 
*/

// routed to Rowvin's Profile
app.get('/rowvin', function(req, res) {
    res.sendFile(path.join(__dirname + '/components/about/personalPages/Rowvin.html'));
});


// routed to Jonathan's Profile
app.get('/Jonathan', function(req, res) {
    //console.log("button was clicked")
    res.sendFile(path.join(__dirname + '/components/about/personalPages/Jonathan.html'));
});

// routed to Kayla's Profile
app.get('/Kayla', function(req, res) {
    res.sendFile(path.join(__dirname + '/components/about/personalPages/Kayla.html'));
});

// routed to Daisy's Profile
app.get('/Daisy', function(req, res) {
    res.sendFile(path.join(__dirname + '/components/about/personalPages/Daisy.html'));
});

// routed to Minho's Profile
app.get('/Minho', function(req, res) {
    res.sendFile(path.join(__dirname + '/components/about/personalPages/Minho.html'));
});

// routed to Rene's Profile
app.get('/Rene', function(req, res) {
    res.sendFile(path.join(__dirname + '/components/about/personalPages/Rene.html'));
});

// routed to Marlon's Profile
app.get('/Marlon', function(req, res) {
    res.sendFile(path.join(__dirname + '/components/about/personalPages/Marlon.html'));
});




// so we can just click on the server link
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
