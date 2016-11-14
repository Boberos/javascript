	document.theform.reference.onchange = function(){
		var id = document.theform.reference.selectedIndex;
		var url = document.theform.reference[id].value;
		window.location.href = url;
	}