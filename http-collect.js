var http = require('http');

var addr = process.argv[2];
var total = 0;
var totalString = "";

http.get(addr, function resp_back(res) {
    res.setEncoding('utf8');
    res.on('data', function got_data(chunk) {
        total += chunk.toString().length;
        totalString += chunk.toString();
    })
}).on('error', function blow_up(err) {
    console.log("blew up: " + err.message);
}).on('close', function end_http(err) {
    console.log(total);
    console.log(totalString);
});