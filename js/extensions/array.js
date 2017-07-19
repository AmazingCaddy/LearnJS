define(["require", "exports", "linqjs"], function (require, exports, linqJsEnumerable) {
    Array.prototype.toQuery = function () {
        return linqJsEnumerable.from(this);
    };
    Array.prototype.pushUnique = function (item) {
        var isItemAdded = this.indexOf(item);
        if (isItemAdded == -1) {
            this.push(item);
        }
    };
    Array.prototype.groupBy = function (groupByFn) {
        var groups = {};
        this.forEach(function (row) {
            var group = groupByFn(row);
            groups[group] = groups[group] || [];
            groups[group].push(row);
        });
        return groups;
    };
    Array.prototype.unique = function (validator) {
        var uniqueArray = [];
        var operatingArray = this;
        if (validator && $.isFunction(validator)) {
            operatingArray = this.map(function (item) { return validator(item); });
        }
        for (var i = 0; i < operatingArray.length; i++) {
            var val = operatingArray[i];
            if (validator && $.isFunction(validator)) {
                if (uniqueArray.filter(function (value) { return validator(value) === val; }).length === 0) {
                    uniqueArray.push(this[i]);
                }
            }
            else if ($.inArray(val, uniqueArray) === -1) {
                uniqueArray.push(this[i]);
            }
        }
        return uniqueArray;
    };
});
