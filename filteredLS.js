fs = require('fs');
path = require('path');

myList = fs.readdir(process.argv[2], function(err, fileList){
if (err){console.log('blew up - reading file list');}
for(var i = 0; i < fileList.length; i++){
if(path.extname(fileList[i]) == "." + process.argv[3]){
console.log(fileList[i]);
}
}
});
