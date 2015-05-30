var fs = require ('fs');
fs.readFile(process.argv[2],function(err, myfile){
		if(err){console.log('oops - need a file?');}
		myStrings = myfile.toString().split('\n');	
		console.log(myStrings.length - 1);
		});

