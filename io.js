var fs = require('fs');
myfile = fs.readFileSync(process.argv[2]);
myStrings = myfile.toString().split('\n');
console.log(myStrings.length - 1);
