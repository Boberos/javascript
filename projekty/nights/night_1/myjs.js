var x = document.getElementById("hello");
var currentposition = 0;
var intervalHandle;
var zmienna = 1;

	x.onclick=function(){
		
		move2(x,zmienna);	
};
	
	

	
	
	function move(e,zmienna) {
		var szerokosc = 50;
		
		function frame(){
			
			szerokosc += zmienna;
		
			e.style.width = szerokosc+"px";
		}
		
		var srpawdz = setInterval(frame, 1);
}
	
	//(x-a)^2+(y-b)^2 = r^2
	//Y = 2X +1
function move2(e,zmienna){
	
	var pion = 100;
	var poziom = 100;
	
	function frame(){
		
		pion += zmienna;
		poziom += zmienna;
	
		e.style.left = poziom+"px";
		e.style.top = pion+"px";
	}
	 setInterval(frame, 2);
}









