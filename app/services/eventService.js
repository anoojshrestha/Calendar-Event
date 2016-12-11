var calendarEventService = angular.module("calendarEventService", ["calendarLocalStorage"]);

calendarEventService.service("CalendarEventService", function(CalendarLocalStorage) {

    // get all events
    this.getAll = function() {
        var events = CalendarLocalStorage.getItem("CAL_EVENTS");
        return {
            results: events
        };            
    };

    // get single event
    this.getSingleRecord = function(id) {
        var events = CalendarLocalStorage.getItem("CAL_EVENTS");
        return {
            results: events.events[id]
        };
    };

    // add new event
    this.add = function(obj) {
        var events = CalendarLocalStorage.getItem("CAL_EVENTS");
        var id = "id_" + obj.date + "_" + obj.time;
        obj["id"] = id;
        obj["isCompleted"] = false;
        events.events[id] = obj;
        CalendarLocalStorage.setItem("CAL_EVENTS", events);
        return {

        };
    };

    // update particular event
    this.update = function(obj) {
        var events = CalendarLocalStorage.getItem("CAL_EVENTS");
        var id = obj.id;
        events.events[id] = obj;
        CalendarLocalStorage.setItem("CAL_EVENTS", events);
        return {

        };
    };

    // delete particular event
    this.delete = function(id) {
        var events = CalendarLocalStorage.getItem("CAL_EVENTS");       
        delete(events.events[id]);
        CalendarLocalStorage.setItem("CAL_EVENTS", events);
        return {

        };
    };
});