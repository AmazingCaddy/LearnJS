define(["require", "exports", "jquery"], function (require, exports, $) {
	var proto = (function () {
		function proto () {
		}
		proto.prototype.beget = function (o) {
			var F = function () {};
			F.prototype = o;
			return new F();
		}
		return proto;
	})();
	return proto;
});