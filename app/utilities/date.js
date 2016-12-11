var calendarDate = angular.module("calendarDate", []);

calendarDate.factory("CalendarDate", function() {

    // REF: http://techblog.procurios.nl/k/news/view/33796/14863/calculate-iso-8601-week-and-year-in-javascript.html
    var getWeekNumber = function(date) {

        var tdt = new Date(date.valueOf());  
        var dayn = (date.getDay() + 6) % 7;  
        tdt.setDate(tdt.getDate() - dayn + 3);  
        var firstThursday = tdt.valueOf();  
        tdt.setMonth(0, 1);  
        if (tdt.getDay() !== 4) {  
            tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);  
        }  
        return 1 + Math.ceil((firstThursday - tdt) / 604800000); 
    }

    var getWeekDates = function(week, year) {
                
        var week_dates = [];        
        for(var i = 1; i <= 7; i++) {
            var date = new Date(year, 0, i + (week - 1) * 7);
            var day_of_week = date.getDay();
            var ISOweekStart = date;
            if (day_of_week <= 4) {
                ISOweekStart.setDate(date.getDate() - date.getDay() + i);
            } else {        		
                ISOweekStart.setDate(date.getDate() + 7 - date.getDay() + i);
            }

            week_dates.push(ISOweekStart);
        }
        
        return week_dates;
    }
    
    return {
        getWeekNumber: getWeekNumber,
        getWeekDates: getWeekDates
    };
});