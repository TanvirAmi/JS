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