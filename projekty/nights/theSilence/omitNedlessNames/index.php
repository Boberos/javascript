<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<!-- TESTING:  MESSY VS CLEAN
	MESSY
	
 -->
 <script type="text/javascript">
 	var realDate = Date;
 	var Date = function(){
 		if(arguments.length === 0){
 			return new realDate(1929,10-1,24);
 		}else{
 			return new realDate(arguments[0],arguments[1],arguments[2]);
 		}
 	};
 	
 	
 	Date = realDate;
 	assertEqual(dayThisMonth(),31);
 //console.log("this month: "+dayThisMonth());
 //console.log("days in month: "+daysInMonth(2015,06));
 //assertEqual(dayThisMonth(????,??),??);
 //BACKGROUND CODE
 
 function dayThisMonth(){
	 var date 	= 	new Date(),
		 y 		=	date.getFullYear(),
		 m		=	date.getMonth(),
		 start	=	new Date(y,m,1),
		 end	=	new Date(y,m+1,1);
	 return (end-start)/(1000*60*60*24);
 };
 function daysInMonth(y,m){
	 var start	=	new Date(y,m-1,1),
		 end	=	new Date(y, m, 1);
	 return (end-start)/(1000*60*60*24);
 };
 function assertEqual(x,y,msg){
	 if(x != y) {
		 console.warn("expected "+x+"to equal "+y);
	 }else{
		 console.info(x+" is equals to " +y);
	 }
	 
 };
 
 </script>
</body>
</html>