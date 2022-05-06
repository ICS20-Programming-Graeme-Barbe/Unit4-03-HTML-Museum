// Created by Graeme
// Created on: May 5
// JS functions for index.html


// This function tells the user the cost of getting into the museum
'use strict';
function enter() {
	// Declares variable
	let userAge = parseInt(document.getElementById('age').value)
	let select = document.getElementById('day')
	let day = select.options[select.selectedIndex].value
	
	// If statement for user age, what age category of movies they can see
	if (userAge == "" || day == "") {
		document.getElementById('cost').innerHTML = "You need to input your age or select the day";
	} else if (userAge <= 5 || userAge >= 95) {
		document.getElementById('cost').innerHTML = "Congratulations, you get in for free!"
	} else if ((userAge >= 12 && userAge <= 21) || (day == "Tuesday" || day == "Thursday")) {
		document.getElementById('cost').innerHTML = "Congratulations, you get student pricing"
	} else {
		document.getElementById('cost').innerHTML = "You need to pay full price."
	}
}