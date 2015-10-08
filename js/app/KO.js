define(["require", "exports", "jquery", 
    "viewmodel/ReservationsViewModel", 
    "viewmodel/SinglePageViewModel"], 
    function (require, exports, $, ReservationsViewModel, SinglePageViewModel) {
    var KOTest = (function () {
        function KOTest () {
            this.singlePage();
            this.Initialize();
        };
        KOTest.prototype.Initialize = function () {
            ko.applyBindings(new ReservationsViewModel(), $("#kotest")[0]);
        }
        KOTest.prototype.singlePage = function () {
            ko.applyBindings(new SinglePageViewModel(), $(".folders")[0]);
        }
        return KOTest;
    })();
    return KOTest;
});