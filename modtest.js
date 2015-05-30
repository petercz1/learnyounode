var mymod = require('./modular.js');
var mydir = process.argv[2];
var filter = process.argv[3];

mymod(mydir, filter, function checkit(err, list) {
    if (err) {
        return console.log("oops: " + err);
    }
    for (var i = 0; i < list.length;
            i++
            ) {
        console.log(list[i]);
    }
});
//var results = function(mymod.yesdoit(mydir, filter, callback)){};
//console.log(results);
