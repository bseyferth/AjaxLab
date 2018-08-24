var btn = document.getElementById("load"); // create a pointer reference to the button in index.jsp
var swapiContainer = document.getElementById("results");

//when the button is clicked...
btn.addEventListener("click", function() {
	var request = new XMLHttpRequest();
	// this will open the connection and allow us to get data
	// first param is what we want to do "GET", second param is the json url
	request.open("GET", "https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json");

	// when the AJAX response loads...
	request.onload = function() {
		console.log(request.responseText);
		var data = JSON.parse(request.responseText);
		renderHTML(data);
	};

	request.send();
});

function renderHTML(data){
	for(var i = 0; i<data.complete.length; i++) {
	var htmlString = "<p>First Name: " + data.complete[i].firstName + "</p><p>Last Name: " + data.complete[i].lastName + "</p><p>Innovation: " + data.complete[i].innovation + "</p><p> Year: " + data.complete[i].year + "</p>";
	swapiContainer.insertAdjacentHTML("beforeend", htmlString);
	}
}
