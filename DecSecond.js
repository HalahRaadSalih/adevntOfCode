var fs = require("fs");

var totallWrapperLength = 0 ;
var totalRibbonLength = 0;

fs.readFile("DecSecondInput.txt", function(error, data){
	var combinations = data.toString().split("\n");

	for(var i = 0; i < combinations.length; i++){

		var currentCombo = combinations[i].split("x");
		
		totallWrapperLength +=wrapperLength(currentCombo[0], currentCombo[1], currentCombo[2]);

		totalRibbonLength += ribbonLength(currentCombo[0], currentCombo[1], currentCombo[2]);
	}

	console.log(totallWrapperLength);
	console.log(totalRibbonLength);


});

function area(length, width){

	return length * width;
}

function surfaceArea(length, width, height){

	return 2 * (area(length, width) + area(length, height) + area(height, length));
}

function areaOfSmallestSide(length,width, height){

 	return Math.min(area(length, width), area(length, height), area(width, height));
 }

function wrapperLength(length, width, height){

	return surfaceArea(length, width, height) + areaOfSmallestSide(length, width, height);
}

function perimeter(length, width){
	return 2 * ( length + width);
}

function smallestPerimeters(length, width, height){
	return Math.min(perimeter(length, width), perimeter(length, height), perimeter(width, height));
}

function bowRibbonLength(length, width, height){

	return length*width*height;
}

function ribbonLength(length, width, height){
	return smallestPerimeters(length, width, height) + bowRibbonLength(length,width,height);
}

console.log(ribbonLength(2,3,4));
console.log(ribbonLength(1,1,10));

