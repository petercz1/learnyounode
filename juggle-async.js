var http = require('http');

var addr1 = process.argv[2];
var addr2 = process.argv[3];
var addr3 = process.argv[4];
var string1 = "";
var string2 = "";
var string3 = "";

var counter = 0;

http.get(addr1, function resp_back(res) {
    var total = 0;
    res.setEncoding('utf8');
    res.on('data', function got_data(chunk) {
        //total += chunk.toString().length;
        string1 += chunk.toString();
    });
}).on('error', function blow_up(err) {
    console.log("blew up: " + err.message);
}).on('close', function end_http(err) {
    //console.log(total);
    //console.log(totalString);
    printIt(++counter);
});

http.get(addr2, function resp_back(res) {
    var total = 0;
    res.setEncoding('utf8');
    res.on('data', function got_data(chunk) {
        //total += chunk.toString().length;
        string2 += chunk.toString();
    });
}).on('error', function blow_up(err) {
    console.log("blew up: " + err.message);
}).on('close', function end_http(err) {
    //console.log(total);
    //console.log(totalString);
    printIt(++counter);
});

http.get(addr3, function resp_back(res) {
    var total = 0;
    res.setEncoding('utf8');
    res.on('data', function got_data(chunk) {
        //total += chunk.toString().length;
        string3 += chunk.toString();
    });
}).on('error', function blow_up(err) {
    console.log("blew up: " + err.message);
}).on('close', function end_http(err) {
    //console.log(total);
    //console.log(totalString);
    printIt(++counter);
});

function printIt(counter) {
    if (counter == 3) {
        console.log(string1);
        console.log(string2);
        console.log(string3);
    }
}
;