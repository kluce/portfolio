var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/css/style.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/css/style.css'));
});


app.listen(8080);
