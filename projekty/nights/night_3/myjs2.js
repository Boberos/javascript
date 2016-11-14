"strict mode"

function displayInfo(args){
	var output = "";
	
	if(typeof args.name == "string"){
		output += "Name: "+args.name+"\n";
	}
	
	if(typeof args.age == "number"){
		output += "Age: "+args.age+"\n";
	}
	alert(output);
}

displayInfo({name: "xXx", age:5});
displayInfo({name: "XXxXX"});


//var colors = new Array(30);
//var colors = new Array("exp","sde","ass");
var colors = ["red","blue","green","white"];
var names = ["Kamil"];

alert(colors.join(", "));
alert(names[0]);
alert(colors.length);
if(Array.isArray(colors)){
	alert("yes");
}

