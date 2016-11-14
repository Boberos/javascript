"strict mode"

function MyObject(a,s,d){
	this.name     = a;
	this.somthing = s;
	this.description = d;
}

MyObject.prototype.nameInfo = function(){
	console.log("I am:  ", this.name);
}

MyObject.prototype.propertyInfo = function(){
	console.log("I have: ", this.somthing);
}

MyObject.prototype.descriptionInfo = function(){
	console.log("It is my descryption: ", this.description);
}

var box = new MyObject("Box", 123, "I am description");

box.descriptionInfo();
box.propertyInfo();
box.nameInfo();
//####################
var xpb = new MyObject("XBP", 0123, "I am description of XBP");

xpb.descriptionInfo();
xpb.propertyInfo();
xpb.nameInfo();