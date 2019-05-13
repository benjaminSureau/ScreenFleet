var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use('/api', require('./routes'));

app.listen(3800, function () {
    console.log('API listening on PORT 3800 : http://localhost:3800/ ');
});