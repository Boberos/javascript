

var rabbit ={};

rabbit.say = function(say){
	console.log(' Mr Rabbit says: '+say+' ');
};

rabbit.say(' I\'m alive hue hue hue ]:> ');


//example 2

function speak(say){
	console.log(" The "+this.type+" rabbit says '"+say+" '");
}
var whiteRabbit = {type: "white",speak:speak};
var fatRabbit = {type: "black",speak:speak};

whiteRabbit.speak("Oh my ears and whiskers, " +"how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.");

speak.apply(fatRabbit, ["Burp!"]);
speak.call({type: "young"}, "Yep.");

// constructor 



function Geometry(type,descr){
	this.type = type;
	this.descr = descr;
}

function descr(){
	console.log(' My shape is : '+this.type+' ');
};

var triangle = new Geometry('triangle',descr);



console.log(triangle.type);
triangle.descr();