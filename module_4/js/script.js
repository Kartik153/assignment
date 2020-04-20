(function() {
	var names = ["Yaakov", "Jerry", "Jane", "Jimmy", "ruby", "Fixy", "lambo", "Princy", "Lexa", "james","Johhny","Hutch"];
	for (i=0;i<names.length;i++){
		var firstLetter = names[i][0].toLowerCase();
		if (firstLetter === 'j') {
			byeSaid.said(names[i]);
		} else {
			helloSaid.said(names[i]);
		}
	}
})();