<html>
	<head></head>
	<body>
	
		<script type="text/javascript">
			function takeName(){
				var name = prompt("Enter a name: ","");
				if(name === 'nameless' ){
					throw new Error(" You are nameless guests! ");
				}else{
					alert("Your name is " +name);
				}
			}

			function testException(){
				try{
					takeName();
				}catch(exception){
					alert(exception.name+" :  "+exception.message);
				}
			}
			window.onload = testException();
		</script>
	</body>
</html>