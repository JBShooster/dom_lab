// Your code here
window.addEventListener("load", function(){
	//#1
	document.getElementById("greeting").innerHTML = "Hello, Planet Earth!";
	
	var listItem = document.getElementsByTagName("li");

	//This covers 2, 3 & 4
	function selected(event){
		console.log("event", event);
		event.target.className = "selected";
		document.querySelector("img").setAttribute("src", "./images/" + this.innerHTML + ".jpeg");
	}

	for (var i = 0; i< listItem.length; i++){
		listItem[i].style.backgroundColor = "yellow";
		listItem[i].addEventListener("click", selected);
	}
	
	//Reset it all
	
	var button=document.getElementById("reset");
	button.addEventListener("click", reset);
	

	function reset(){
		var listItem = document.getElementsByTagName("li");
		for (i=0; i<listItem.length; i++){
			listItem[i].setAttribute("class", "");
			var pic = document.getElementsByTagName("img");
			pic[0].setAttribute("src", "./images/panic.jpeg");
		}
	}

});




