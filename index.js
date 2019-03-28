var express = require('express');
var bodyParser = require('body-parser');

var app = express(),
port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.get('/', function(req, res) {
    res.send({status: 'Working'});
});

app.listen(port, function() {
    console.log(`Server on port: ${port}`);
});