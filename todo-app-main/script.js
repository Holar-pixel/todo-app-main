var Add = document.getElementById("Enter");
var input= document.getElementById("place");
var ul=  document.querySelector("ul");
var icon=document.getElementById("icon");


Add.addEventListener("click", function() {
	if (input.value.length) {
		var li= document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}
	
})




icon.addEventListener("click", function() {
	var sun= document.getElementById("icon");
	sun.setAttribute("", "Icon");

})