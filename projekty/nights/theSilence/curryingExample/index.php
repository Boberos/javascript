<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<script type="text/javascript">
	var babyAnimals = function(a){
		return function(b){
			var result = 'test '.concat(a).concat(' and ').concat(b);
			return result;
		};
	};
	
	var babyKoala = babyAnimals('koalas');
	console.log(babyKoala());
	console.log(babyKoala('elephants'));
	console.log(babyKoala('Lion'));

</script>
</body>
</html>