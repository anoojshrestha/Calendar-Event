function WeekController($rootScope, $scope, $interval, Constants, CalendarDate, CalendarEventService, ngDialog) {
    
    $scope.showPopup = function(template, event) {
        $scope.event = event;
        ngDialog.open({
            template: template,
            plain: false,
            scope: $scope
        });
    };

    $rootScope.createEvent = function(event) {
        if(event.title){
            CalendarEventService.add(event);
            ngDialog.close();
            $scope.events = CalendarEventService.getAll().results;    
        }
        
    };

    $rootScope.removeEvent = function(id) {
        CalendarEventService.delete(id);
        ngDialog.close();
        $scope.events = CalendarEventService.getAll().results;
    };

    $rootScope.updateEvent = function(event) {
        if(event.title){
            CalendarEventService.update(event);
            ngDialog.close();
            $scope.events = CalendarEventService.getAll().results;
        }
    };

    // load the next week data
    $scope.nextWeek = function() {
        var week_num = $scope.selected.week_num;
        var year = $scope.selected.year;

        if(week_num == 52) {
            week_num = 1;
            year++;
        } else {
            week_num++;
        }

        $scope.week_dates = getShortWeekDates(week_num, year);
        $scope.selected = {
            week_num: week_num,
            year: year
        }
    };

    // load the previous week data
    $scope.prevWeek = function() {
        var week_num = $scope.selected.week_num;
        var year = $scope.selected.year;

        if(week_num == 1) {
            week_num = 52;
            year--;
        } else {
            week_num--;
        }

        $scope.week_dates = getShortWeekDates(week_num, year);
        $scope.selected = {
            week_num: week_num,
            year: year
        }
    };

    var getShortWeekDates = function(week_num, year) {
        var week_date_short = [];
        var week_dates_long = CalendarDate.getWeekDates(week_num, year);
        for(var index in week_dates_long) {
            var date_long = week_dates_long[index];
            week_date_short.push({ 
                short: Constants.WeekDays[date_long.getDay()] + " " + (date_long.getMonth() + 1) + "/" + date_long.getDate(), 
                date: year + "-" + (date_long.getMonth() + 1) + "-" + date_long.getDate()
            });
        }            
        return week_date_short;        
    }

    var init = function() {
        $scope.Constants = Constants;
        var today = new Date();        
        var week_num = CalendarDate.getWeekNumber(today);
        $scope.week_dates = getShortWeekDates(week_num, today.getFullYear());
        $scope.selected = {
            week_num: week_num,
            year: today.getFullYear()
        }
        $scope.events = CalendarEventService.getAll().results;

        // continuously check for scheduled event each minute (60 * 1000 milliseconds)
        $interval(function() {
            // add 10 minutes (10 * 60 * 1000 milliseconds) to current time
            // to alert 10 minutes before the scheduled event
            var today = new Date(new Date().getTime() + 10 * 60 * 1000);
            var event_id = "id_" + today.getFullYear() + "-" + (today.getMonth() + 1) 
                                + "-" + today.getDate() + "_" + today.getHours();
            var event = $scope.events.events[event_id];
            // check if alert for scheduled event is delevired or not
            if(event && !event.isCompleted) {
                event["isCompleted"] = true;
                CalendarEventService.update(event);
                $scope.events.events[event_id] = event;
                alert(event.title+"\nStart Time: "+event.time+":00");
            }
        }, 60 * 1000);
    };

    init();
}