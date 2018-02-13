/*
client.js

Author: Nikolas Martelaro (nmartelaro@gmail.com)
Extended: David Goeicke (da.goedicke@gmail.com)
Purpose: This run the interactivity and communication for the web app. This file
is served to the users web browser and executes on the browser.

Usage: This file is called automatically when the webpage is served.

//--Addition. Added a button handling for the `Take a picture` button.
*/

// WebSocket connection setup
var socket = io();

//-- Addition: Forward the `Take a picture` button-press to the webserver.
function takePicture() {
	$(".snapshot-frame").css("background-color", "white");
	socket.emit('takePicture');
	load_imgs();
	setTimeout(function() {
		$(".snapshot-frame").css("background-color", "black");
	}, 1500);
}

//-- Addition: This function receives the new image name and applies it to html element.

socket.on('newPicture', function(msg) {
	document.getElementById('pictureContainer').src = msg;
	load_imgs();
});
// read the data from the message that the server sent and change the
// background of the webpage based on the data in the message
socket.on('server-msg', function(msg) {
	msg = msg.toString();
	console.log('msg:', msg);
	switch (msg) {
		case "light":
			$(".snapshot-frame").css("background-color", "white");
			console.log("white")
			break;
		case "dark":
			$(".snapshot-frame").css("background-color", "black");
			console.log("black");
			break;
		default:
			//console.log("something else");
			break;
	}
});