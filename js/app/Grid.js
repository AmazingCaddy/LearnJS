define (["require", "exports"], function (require, exports) {
	//console.log("Grid");
	var Grid = (function () {
		function Grid (id, name, x, y, z) {
			this.id = id < 0 ? 0 : id;
			this.name = name || "--";
			this.x = x || "--";
			this.y = y || "--";
			this.z = z || "--";
			this.priority = 0;
		}
		Grid.prototype.filter = function (options) {
			this.priority = 0;
			for (var i = 0; i < options.length; i ++) {
				this.priority <<= 1;
				if (this[options[i].key] !== "--") {
					this.priority |= 1;
				}
			}
		};
		Grid.prototype.toString = function () {
			return "priority = " + this.priority + ", id = " + this.id + ", name = " + this.name + ", x = " + this.x + ", y = " + this.y + ", z = " + this.z;
		}
		return Grid;
	})();
	return Grid;
});