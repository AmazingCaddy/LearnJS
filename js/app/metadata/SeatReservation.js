define(["require", "exports"], function () {
    // Class to represent a row in the seat reservations grid
    var SeatReservation = (function () {
        function SeatReservation(name, initialMeal) {
            var self = this;
            self.name = name;
            self.meal = ko.observable(initialMeal);

            self.formattedPrice = ko.computed(function() {
                var price = self.meal().price;
                return price ? "$" + price.toFixed(2) : "None";        
            });
        }
        return SeatReservation;
    })();
    return SeatReservation;
});