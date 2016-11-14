<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>JS night 5</title>
		<link rel="stylesheet" type="text/css" href="style.css" ></link>
	</head>
	<body>
		<script type="text/javascript" src="myjs.js"></script>
		<script >
			kamil.speak({say: 'Yep'});
			kamil.run({speed: 'slow'});
			kamil.speak({say: 'Nope'}).run().speak({say: 'faster'}).run({speed: 'faster'});
		</script>
	</body>
</html>