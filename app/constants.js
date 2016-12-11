var calendarConstants = angular.module("calendarConstants",[]);

calendarConstants.factory("Constants", function(){
    return {
        // list of available servers
        WeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        Month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        Hours: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
    };
});
