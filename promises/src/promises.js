var sunday =  false;

var goToSchool = new Promise(function(resolve, reject){
	if(sunday){
		resolve("No");
	}
	else{
		reject("Yes");
	}
})

var checkPromise = function(){
	goToSchool.then(function(fromResolve){
		console.log(fromResolve + ', You may not go to school');
	}).catch(function(fromReject){
		console.log(fromReject + ', You have to go to school');
	});
}
checkPromise();