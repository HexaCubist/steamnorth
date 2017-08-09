var app = angular.module("TrailGen", ["ngRoute"]);


app.controller('HomeController', function($scope ,$rootScope, $location) {
    // $scope.pageClass = "page-home";
    $rootScope.pageClass = "page-home";
    $rootScope.isActive = function(route){ return route === $location.path(); }

});

app.controller('menu', function($scope, $location) {
    $scope.isActive = function(route){ return route === $location.path(); }

});


app.controller('AboutController', function($scope, $rootScope) {
    $rootScope.pageClass = "page-about"
});

app.controller('LocomotivesController', function($scope, $rootScope) {
    $rootScope.pageClass = "page-locomotives"
});

app.controller('EventsController', function($scope, $rootScope) {
    $rootScope.pageClass = "page-events"
});

app.controller('VenueController', function($scope, $rootScope) {
    $rootScope.pageClass = "page-venue"
});

app.controller('SponsorsController', function($scope, $rootScope) {
    $rootScope.pageClass = "page-sponsors"
});



app.config(function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });
    $routeProvider
    .when("/", {
        templateUrl : "pages/home.html",
        controller: 'HomeController'
    })
    .when("/about", {
        templateUrl : "pages/about.html",
        controller: 'AboutController'
    })
    .when("/locomotives", {
        templateUrl : "pages/locomotives.html",
        controller: 'LocomotivesController'
    })
    .when("/events", {
        templateUrl : "pages/events.html",
        controller: 'EventsController'
    })
    .when("/venue", {
        templateUrl : "pages/venue.html",
        controller: 'VenueController'
    })
    .when("/sponsors", {
        templateUrl : "pages/sponsors.html",
        controller: 'SponsorsController'
    })
});
