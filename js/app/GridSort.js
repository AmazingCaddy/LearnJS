define (["require", "exports", "app/Grid"], function (require, exports, Grid) {
	//console.log("GridSort");
	var GridSort = (function () {
		function GridSort(options) {
			this.options = options || [];
		}
		GridSort.prototype.sort = function (grids, options) {
			var _this = this;
			this.options = options || this.options;
			for (var i = 0; i < grids.length; i ++) {
				grids[i].filter(this.options);
			}
			function compare(a, b) {
				if (a.priority !== b.priority) {
					return (a.priority > b.priority ? -1 : 1);
				}
				for (var i = 0; i < _this.options.length; i ++) {
					var key = _this.options[i].key;
					if (a[key] !== b[key]) {
						return (a[key] < b[key] ? -1 : 1) * _this.options[i].order;
					}
				}
				return 0;
			}
			grids.sort(compare);
		}
		return GridSort;
	})();
	return GridSort;
});