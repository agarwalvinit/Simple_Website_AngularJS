var app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "partials/home.html",
        controller: 'homeController'
    })
    .when('/venue', {
        templateUrl: "partials/venue.htnl",
        controller: "venueController "
    })
    .otherwise ({ redirectTo: '/'});
});
app.controller('homeController', function(){
    
});
app.controller('venueController', function(){
    
});