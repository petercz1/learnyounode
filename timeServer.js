
var port = process.argv[2];

var net = require('net');
var server = net.createServer(function timer(socket) {
    console.log("Console: test");
    var date = new Date();
    var dateString = "";
    dateString += date.getFullYear() + "-";
    dateString += pad(date.getMonth() + 1);
    dateString += "-" + pad(date.getDate()) + " ";
    dateString += pad(date.getHours()) + ":";
    dateString += pad(date.getMinutes());
    socket.end(dateString);
});
server.listen(port);

function pad(n){return n<10 ? '0'+n : n}
