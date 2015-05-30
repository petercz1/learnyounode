var http = require('http');
var port = process.argv[2];
var url = require('url');

var server = http.createServer(sort_routes_out);
server.listen(port);

function sort_routes_out(req, res) {
    var urlRequest = url.parse(req.url, true);
    var date = new Date(urlRequest.query.iso);

    if (urlRequest.pathname == '/api/parsetime') {
        result = parsetime(date);
    }
    else if (urlRequest.pathname == '/api/unixtime') {
        result = unixtime(date);
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(result));
}
;

function parsetime(date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}
;

function unixtime(date) {
    return {
        unixtime: date.getTime()
    };
}
;