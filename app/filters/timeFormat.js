var calendarTimefilter = angular.module("calendarTimefilter", []);

// 24 hr to 12 hr time format filter
calendarTimefilter.filter('timeFormatfilter', function(){
    return function(time){
	    var timeFormated = time%12;
	    var clockPeriod = (time < 12 ? "AM" : "PM");
	    timeFormated = (timeFormated == 0 ? "12" : timeFormated);
	    return timeFormated+' '+clockPeriod;
    };
});