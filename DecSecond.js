var fs = require("fs");

var totallWrapperLength = 0 ;
var totalRibbonLength = 0;

fs.readFile("DecSecondInput.txt", 'utf8',function(error, data){
	var combinations = data.toString().split("\n");

	for(var i = 0; i < combinations.length; i++){

		var currentCombo = combinations[i].split("x");
		var l = parseInt(currentCombo[0]);
		var w = parseInt(currentCombo[1]);
		var h = parseInt(currentCombo[2]);

		totallWrapperLength +=wrapperLength(l, w, h);

		totalRibbonLength += ribbonLength(l, w, h);
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

function smallestTwoPerimeter(length, width, height){
	var max = Math.max(length, width, height);
	var min = Math.min(length, width, height);

	var mid = length + width + height - min - max;

	return 2* min + 2 *mid;
}

function bowRibbonLength(length, width, height){

	return length * width * height;
}

function ribbonLength(length, width, height){
	return smallestTwoPerimeter(length, width, height) + bowRibbonLength(length,width,height);
}

console.log(ribbonLength(2,3,4));
console.log(ribbonLength(1,1,10));

console.log(smallestTwoPerimeter(2,3,4));
// console.log(perimeter(2,4));
// console.log(perimeter(3,4));

