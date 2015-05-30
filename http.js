var http = require('http');

var addr = process.argv[2];

http.get(addr, function resp_back(res) {
    res.setEncoding('utf8');
    res.on('data', function got_data(chunk) {
        console.log(chunk);
    })
}).on('error', function blow_up(err) {
    console.log("blew up: " + err.message);
});