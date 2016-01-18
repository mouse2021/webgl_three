
function write(str) {
	var response = document.getElementById("response"),
	    time = (new Date()).toLocaleTimeString();
	response.value += time + " - " + str + "\r\n";
}

function setupInput(ws) {
	var input = document.getElementById("input");
	
	input.addEventListener("keydown", function(e) {
		if (e.keyCode == 13) {
			ws.send(this.value);
			this.value = "";
		}
	});
}

function setupChat() {
	var ws = new WebSocket("ws://107.20.205.227:9999/");
	
	setupInput(ws);
	
	write("Welcome to Very Simple Chat!");

	ws.addEventListener("open", function () {
		write("Opened connection");
	}, false);
	
	ws.addEventListener("message", function(e) {
		write(e.data);
	}, false);
	
	ws.addEventListener("close", function(e) {
		console.log(e);
		write("Connection closed");
	}, false);
}

window.addEventListener("load", setupChat, false);