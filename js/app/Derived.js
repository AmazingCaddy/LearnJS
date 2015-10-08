define(["require", "exports", "app/Wenbwa"], function (require, exports, wenbwa) {
	var Derived = (function (_super) {
		__extends(Derived, _super);
		function Derived (x, y, z) {
			_super.call(this, x);
			this.z = z || 3;
		}
		Derived.prototype.show = function () {
			return "x = " + this.x + ", y = " + this.y + ", z = " + this.z;
		}
		return Derived;
	})(wenbwa);
	return Derived;
});