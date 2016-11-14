//example 2 
"strict mode"

var myRequest;
if(window.XMLHttpRequest){
	myRequest = new XMLHttpRequest();
}else if(window.ActiveXObject){
	myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

myRequest.onreadystatechange = function(){
	if(myRequest.readyState === 4){
		 t = myRequest;
		 alert(t.responseText);
		 var obj =t.responseText;
		 console.log(JSON.parse(obj));
		 
	}
}

 myRequest.open('GET','tb_dec.json',true);

myRequest.send(null);



