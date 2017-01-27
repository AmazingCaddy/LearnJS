var __extends = this.__extends || function (d, b) {
	for (var p in b) {
		if (b.hasOwnProperty(p)) {
			console.log(p);
			d[p] = b[p];
		}
	}
	function __() {
		this.constructor = d;
	}
	__.prototype = b.prototype;
	d.prototype = new __();
};

requirejs.config({
	baseUrl: "../js/app",
	paths: {
		"jquery": "../lib/jquery-2.1.4",
		"jquery.bootstrap": "../lib/bootstrap"
	},
	shim: {
		"jquery.bootstrap" : {
			deps: ["jquery"]
		},
		"Hello": {
			deps: [],
			init: function () {
				return {
					xxx: hello
				}
			}
		}
	}
//	map: {
//		// '*' means all modules will get 'jquery-private'
//		// for their 'jquery' dependency.
//		"*": { 
//			"jquery": "lib/jquery-private"
//		},
//		// 'jquery-private' wants the real jQuery module
//		// though. If this line was not here, there would
//		// be an unresolvable cyclic dependency.
//		"lib/jquery-private": {
//			"jquery": "jquery"
//		}
//	}
});

/*
require(["require", "jquery", "app/Grid", "app/SortOption", "app/GridSort", "jquery.bootstrap", "app/Hello"], function (require, $, Grid, SortOption, GridSort, bootstrap, hello) {
	var grids = [];
	//console.log($);
	//console.log(bootstrap);
	hello.xxx();
	var obj = $.extend({}, {x: 4}, {y: {x: 1}}, {y: {z: 2}});
	console.log(JSON.stringify(obj));
	grids.push(new Grid( 0, "wenbin", 2, 2, 2));
	grids.push(new Grid( 1, "wenbin", 2, 2, 1));
	grids.push(new Grid( 2, "wenbin", 2, 1, 2));
	grids.push(new Grid( 3, "wenbin", 2, 1, 1));
	grids.push(new Grid( 4, "wenbin", 1, 2, 2));
	grids.push(new Grid( 5, "wenbin", 1, 2, 1));
	grids.push(new Grid( 6, "wenbin", 1, 1, 2));
	grids.push(new Grid( 7, "wenbin", 1, 1, 1));

	grids.push(new Grid( 8, "wenbin", 1, 1, 1));
	grids.push(new Grid( 9, "wenbin", 1, 1, 0));

	grids.push(new Grid(10, "wenbin", 1, 0, 2));
	grids.push(new Grid(11, "wenbin", 1, 0, 3));
	grids.push(new Grid(16, "wenbin", 1, 0, 1));
	grids.push(new Grid(17, "wenbin", 1, 0, 4));

	grids.push(new Grid(12, "wenbin", 0, 1, 1));
	grids.push(new Grid(13, "wenbin", 0, 1, 1));
	grids.push(new Grid(14, "wenbin", 0, 0, 1));
	grids.push(new Grid(15, "wenbin", 0, 0, 0));

	var options = [];
	options.push(new SortOption("x", "asc"));
	options.push(new SortOption("y", "desc"));
	options.push(new SortOption("z", "desc"));
	var gridSort = new GridSort();
	gridSort.sort(grids, options);

	//$(".container").on("click", hello.xxx);
	//for (var i = 0; i< grids.length; i ++) {
	//	console.log(grids[i].toString());
	//}

	var deferred = $.Deferred();

	deferred.done(function (data) {
		console.log("resolve 1: " + data);
	});

	deferred.done(function (data) {
		console.log("resolve 2: " + data);
	});

	deferred.resolve("haha");

	console.log(deferred.state());

	deferred.done(function (data) {
		console.log("resolve 3: " + data);
	});
});
*/
require(["require", "exports", "KO"], function (require, exports, KOTest) {
	var kot = new KOTest();
});
