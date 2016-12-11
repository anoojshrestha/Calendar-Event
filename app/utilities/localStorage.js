var calendarLocalStorage = angular.module("calendarLocalStorage", []);

calendarLocalStorage.factory("CalendarLocalStorage", function() {

    // Store in local storage
    var setItem = function(key, value) {
        if (typeof(Storage) !== "undefined") {
            // Set item
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } else {
            return false;
        }
    };

    // Retrieve from local storage
    var getItem = function(key) {
        var value = localStorage.getItem(key);
        if(value == null) {
            return { events: {} };
        }
        return JSON.parse(localStorage.getItem(key));
    };

    // Remove from local storage
    var removeItem = function(key) {
        localStorage.removeItem(key);
    };

    return {
        setItem: setItem,
        getItem: getItem,
        removeItem: removeItem
    }
})