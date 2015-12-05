var fs = require("fs");
var sum = 0 ;

fs.readFile("DecSecondInput.txt", function(error, data){
	var combinations = data.toString().split("\n");

	for(var i = 0; i < combinations.length; i++){

		var currentCombo = combinations[i].split("x");
		var smallestSide = 
		sum +=wrapperLength(currentCombo[0], currentCombo[1], currentCombo[2]);
	}

	console.log(sum);

});

function area(length, width){

	return length * width;
}

function surfaceArea(length, width, height){

	return (2 * length * width) + (2 * width * height) + (2 * height * length);
}

function areaOfSmallestSide(length,width, height){

 	return Math.min((length * width), (length * height), (width * height));
 }

function wrapperLength(length, width, height){

	return surfaceArea(length, width, height) + areaOfSmallestSide(length, width, height);
}
