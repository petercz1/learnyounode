var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var fileToGet = process.argv[3];

var server = http.createServer(function theServer(req, res) {
    var readStream = fs.createReadStream(fileToGet);
    readStream.on('open', function readTheStream() {
        readStream.pipe(res);
    });

    readStream.on('error', function streamError(err) {
        res.end(err);
    });

    console.log(req.header);

});

server.listen(port);