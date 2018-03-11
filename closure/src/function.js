// Understanding closure
function myFunc(){
	var name = 'MacBook';

	function displayName(){
		console.log(name);
	}
	return displayName;
}
var x = myFunc();
x();

//"use strict";

//var a = 20;
function sum(x, b) {
    a = x + b;
    console.log(a);
}

console.log(a);
sum(10,20);
var a = 50;
console.log(a);
