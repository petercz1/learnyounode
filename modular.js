fs = require('fs');
path = require('path');
var returnList = [];

module.exports = function listing(varDir, varFilter, callback) {
    if (varDir == null || varFilter == null)
    {
       return callback(new Error('all args required (directory, filter)'));
    }
    ;
    mylist = fs.readdir(varDir, function listIt(err, filelist) {
        if (err) {
            return callback(err);
        }
        for (var i = 0; i < filelist.length; i++) {
            if (path.extname(filelist[i]) == "." + varFilter) {
                returnList.push(filelist[i]);
            }
        }
        return callback(null, returnList);
    });
};

