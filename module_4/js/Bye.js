(function(window) {
	var byeSaid = {};
	var sayWord = "Good Bye";
	byeSaid.said = function(name) {
		console.log(sayWord + " " + name);
	}
	
	window.byeSaid = byeSaid;
})(window);	