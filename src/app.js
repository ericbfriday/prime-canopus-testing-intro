var express = require('express');
var app = express();

var addOne = require('./modules/addOne');

app.get('/addOne/:number', function (req, res) {
    console.log('req.params -> ', req.params);
    var valPlusOne = addOne(parseInt(req.params.number));
    res.send({result: valPlusOne}).status(200);
});

app.listen(3000);