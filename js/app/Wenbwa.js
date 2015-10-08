define(function () {
	var Wenbwa = (function() {
		function Wenbwa(x, y) {
			this.x = x || 1;
			this.y = y || 2;
		}
		Wenbwa.prototype.show = function (){
			return "x = " + this.x + ", y = " + this.y;
		};
		return Wenbwa;
	})();
	return Wenbwa;
});