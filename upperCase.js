var http = require('http');
var port = process.argv[2];

var server = http.createServer(function create_server(req, res) {
    var formResponse = '';
    req.on('data', function getData(chunk) {
        formResponse += chunk;
    });
    req.on('end', function endStuff() {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        if (formResponse.length > 0) {
            res.end(formResponse.toUpperCase());
        }
        ;
    });
});

server.listen(port);