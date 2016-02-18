define(["require", "exports"], function () {
	var ExceptionTest = (function () {
		function ExceptionTest () {
			var wait = function () {
				var dtd = $.Deferred();
				var tasks = function (){
					throw "tasks failed";
				}
			}

		}
		ExceptionTest.prototype.async = function(first_argument) {
			var deferred = $.Deferred();

			return deferred.promise();
		};
		return ExceptionTest;
	})();
	return ExceptionTest;
});