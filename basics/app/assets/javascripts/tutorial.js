/*
Multiline comment
*/

var square = function (number) {
	return number * number;
	
}


var cube = function (number) {
	return square(number) * number;
}


var area = function (length, height) {
	return length * height
}

var response = prompt('(s)quare, (c)ube, (a)rea or (q)uit');

var get_number = function (message) {
	return parseInt(prompt(message));
}


while (response !== 'q') {
	switch(response) {
		case 's':
		var squared = square(get_number('enter a number to square'));
		console.log('the square is: ' + squared);
		break;
		case 'c':
		var cubed = cube(get_number('enter a number to cube'));
		console.log('the cube is: ' + cubed);
		break;
		case 'a':
		var length = get_number('enter length');
		var width = get_number('enter width');
		var a = area(length, width);
		console.log('the area is: ' + a);
	}
	response = prompt('(s)quare, (c)ube, (a)rea or (q)uit');
}


/*
var colors = [];
var color = prompt('enter a colour');


//Read colours from the user until she 'q'uits
while (color != 'q') {
	colors.push(color);
	color = prompt('enter a colour: ');
}

console.log('read loop done')

// Log out each of the colours.
for (var index = 0; index < colors.length; index++) {
	console.log('the colour is: ' + colors[index]);
}
*/


/*
var first = prompt('Enter your name champion:');
console.log('Welcome ' + first);

var age = prompt('Enter age homie:');
console.log(first, 'is', age);

age = parseInt(age);

if (age < 18) {
	console.log('you are childish');
} else {
	console.log('you are stupppid');
}
 
switch(age) {
	case 10:
	console.log ('you are eight dick!');
	break
	case 20:
	console.log('you are sizteen dick!');
	break
	case 30:
	console.log('you are twenty four dick!');
	break
	default:
	console.log('csn type?');
}

*/