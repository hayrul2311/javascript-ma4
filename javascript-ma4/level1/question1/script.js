var buttonx = document.getElementById("button");
buttonx.addEventListener('click', function(btn){
	alert("success");
	btn.stopPropagation();
})