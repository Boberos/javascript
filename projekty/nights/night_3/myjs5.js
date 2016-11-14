"strict mode"

var n = function(){
	var sum=0;
	for(var i=arguments.length-1; i>=0;i--){
		sum += arguments[i];
	}
	return sum;
}

alert(n(2,3,8,32,32,12));