var calendarApp = angular.module("calendarApp", ["ngRoute", "ngResource", "calendarConstants", "calendarDate", "calendarEventService", "ngDialog", "calendarTimefilter"]);

calendarApp.config(["$routeProvider", function($routeProvider) {
    
    $routeProvider
        .when("/", {templateUrl: "views/main.view.html", controller: "WeekController"})
        .otherwise({redirectTo: "/"});
}]);