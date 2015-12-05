var fs = require("fs");

fs.readFile("DecSecondInput.txt", function(error, data){
	var numberXRegex = /\d+\x\d+\x\d+/g;
	var combinations = data.toString().split("\n");

	for(var i = 0; i < combinations.length; i++){

		console.log(combinations[i].match(numberXRegex));
	}

	
});


