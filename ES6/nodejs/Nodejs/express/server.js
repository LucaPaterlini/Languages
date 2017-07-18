/**
 * Created by pater92 on 07/02/17.
 */
var express = require('express');
var app = express();

app.get('/', function (req,res) {
    res.send('Hello World and ciaone');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})