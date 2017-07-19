requirejs.config({
	baseUrl: "../js/app",
	paths: {
		"backbone": "../lib/backbone",
		"jquery.stickytableheaders": "../lib/jquery.stickytableheaders",
		"knockout": "../lib/knockout-3.3.0",
		"underscore": "../lib/underscore",
		"kendo.all.min": "../lib/kendo.all.min",
		"knockout-kendo": "http://rniemeyer.github.io/knockout-kendo/js/knockout-kendo.min.js",
		"text": "../text",
		"linqjs": "../lib/linq",
		"extensions": "../extensions"
	},
	packages: [
		{
	        name: "tslib",
	        location: "../../node_modules/tslib",
	        main: "tslib"
	    },
	    {
	    	name: "jquery",
	    	location: "../../node_modules/jquery",
	    	main: "dist/jquery"
	    }
	],
	shim: {
	}
});

require(["application"], function (App) {
	var app = new App();
	app.Start();
});