define(["require", "exports"], function (require, exports) {
	//console.log("SortOption");
	var SortOption = (function () {
		function SortOption (key, order) {
			this.key = key || "";
			this.order = (order == "asc" ? 1 : -1);
		}
		return SortOption;
	})();
	return SortOption;
});