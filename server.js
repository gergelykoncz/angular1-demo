var express = require('express');
var monarchs = require('./monarchs.json');
var houses = require('./houses.json');

var app = express();
app.use(express.static('public'));

app.get('/monarchs', function (req, res) {
    res.json(monarchs);
});

app.get('/houses', function (req, res) {
    res.json(houses);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});