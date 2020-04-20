(function(window) {
	var helloSaid = {};
	
	var sayWord = "Hello";
	helloSaid.said = function(name) {
		console.log(sayWord + " " + name);
	}
	window.helloSaid = helloSaid;
})(window);