define(["require", "exports", "metadata/SeatReservation"], function (require, exports, SeatReservation) {
    var ReservationsViewModel = (function () {
        // Overall viewmodel for this screen, along with initial state
        function ReservationsViewModel() {
            var _this = this;
            // Non-editable catalog data - would come from the server
            _this.availableMeals = [
                { mealName: "Standard (sandwich)", price: 0 },
                { mealName: "Premium (lobster)", price: 34.95 },
                { mealName: "Ultimate (whole zebra)", price: 290 }
            ];    

            // Editable data
            _this.seats = ko.observableArray([
                new SeatReservation("Steve", _this.availableMeals[0]),
                new SeatReservation("Bert", _this.availableMeals[0])
            ]);
            
            _this.addSeat = function() {
                _this.seats.push(new SeatReservation("", _this.availableMeals[0]));
            };
            
            _this.removeSeat = function(seat) {
                _this.seats.remove(seat);
            };

            _this.Remove = function (seats) {
                var t = seats;
                _this.seats([]);
            }
            
            _this.totalSurcharge = ko.computed(function() {
                var total = 0;
                for (var i = 0; i < _this.seats().length; i++)
                    total += _this.seats()[i].meal().price;
                return total;
            });
        }
        return ReservationsViewModel;
    })();
    return ReservationsViewModel;
});