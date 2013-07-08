var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));

app.get('/', function (request, response) {

    var main = fs.readFileSync("./index.html");
    response.send(main.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});
