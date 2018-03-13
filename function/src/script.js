// Declaration
declaration(); // call properly(declaration hoisted)
function declaration(){
	console.log("Hi, I am function Declaration");
}

// Function Expression
expression(); // TyeError cause function expression can't be hoisted.
var expression = function(){
	console.log("Hi, I am function Expression");
}
//expression();