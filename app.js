var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');

});

app.listen(3000, function () {
    console.log('App listening on port ' + port + '!');
});