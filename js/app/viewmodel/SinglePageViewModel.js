define(["require", "exports", "jquery"], function (require, exports, $) {
	var SinglePageViewModel = (function () {
		function SinglePageViewModel () {
            var _this = this;
            this.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
            this.chosenFolderId = ko.observable();

            // Behaviours
            this.goToFolder = function(folder) {
                _this.chosenFolderId(folder);
            };

		}
		return SinglePageViewModel;
	})();
	return SinglePageViewModel;
})