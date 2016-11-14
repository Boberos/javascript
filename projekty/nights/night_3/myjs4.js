"strict mode"

function Mda(arg1,arg2){
	this.arg1 = arg1;
	this.arg2 = arg2;
}
function Obj(arg1,arg2,arg3){
	this.arg1 = arg1;
	this.arg2 = arg2;
	this.arg3 = arg3;
}

var info = function(args){ console.log(args)};

Obj.prototype.info = info;
Mda.prototype.info = info;

var exObj = new Obj("#234efd","#de324","Orginal -> do not change !");
exObj.arg1="OBJ.arg1";
exObj.arg2="OBJ.arg2";

var exMda = new Mda();
exMda.arg1="MDA.arg1";
exMda.arg2="MDA.arg2";


exObj.info("OBJ.prototype");
exMda.info("MDA.prototype");


var obj = {
	      x: 81,
	      getX: function() { return this.x; }
	    };



	    alert(obj.getX.bind(obj)());
	    alert(obj.getX.call(obj));
	    alert(obj.getX.apply(obj));