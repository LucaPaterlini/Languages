/**
 * Created by pater92 on 07/02/17.
 */
var http = require('http');
var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.htm'
};

var callback = function(response){
    var body = '';
    response.on('data', function(data) {body += data;});
    response.on('end', function() {console.log(body);});
}
r
var req = http.request(options, callback);
req.end();