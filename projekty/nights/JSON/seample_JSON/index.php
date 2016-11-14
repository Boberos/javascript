<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<ul id="links"></ul>
	<script> var data = {
				"json_obj1" :	
           			{	"author"	: "example author 1",
  						"title"		: "example title 1",
  						"links"		: {
	  								"facebook"	: "https://www.facebook.com",
									"twitter"	: "https://www.twitter.com",
									"youtube"	: "https://www.youtube.com"}
  					
  					},
  					
  				"json_obj2" :
           			{	"author"	: "example author 2",
  						"title"		: "example title 2",
  						"links"		: {
  									"facebook"	: "https://www.facebook.com",
									"twitter"	: "https://www.twitter.com",
									"youtube"	: "https://www.youtube.com"}
  					
  					},
  				"json_obj3" :
           			{	"author"	: "example author 3",
  						"title"		: "example title 3",
  						"links"		: {
  									"facebook"	: "https://www.facebook.com",
  									"twitter"	: "https://www.twitter.com",
  									"youtube"	: "https://www.youtube.com"}
  					
  					}
			};
	
		       
		       
	
	var output="";
	
		for(key in data.json_obj3.links){
			output +='<li><a href="'+data.json_obj3.links[key]+'">'+key+'</a></li>'
			console.log(output);
	}
		
		var update = document.getElementById('links');
		update.innerHTML = output;
	</script>
</body>
</html>