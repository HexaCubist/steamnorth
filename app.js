var app = angular.module("TrailGen", ["ngRoute"]);


app.controller('HomeController', function($scope ,$rootScope, $location) {
    // $scope.pageClass = "page-home";
    $rootScope.pageClass = "page-home";
    $rootScope.pageName = "Steam North Whangarei";
    $rootScope.pageSubName = "Welcome!";
    $rootScope.isActive = function(route){ return route === $location.path(); }
    $rootScope.pageinfo =  {
        "Name": "Steam North Whangarei",
        "Subtitle": "Slogan"
    }

});

app.controller('menu', function($scope, $location) {
    $scope.isActive = function(route){ return route === $location.path(); }

});


app.controller('AboutController', function($scope, $rootScope) {
    $rootScope.pageClass = "page-about"
    $rootScope.pageName = "About Us"
    $rootScope.pageSubName = "";
        $rootScope.pageinfo =  {
            "Name": "About Us",
        }
});

app.controller('LocomotivesController', function($scope, $rootScope) {
    $rootScope.pageClass = "page-locomotives"
    $rootScope.pageName = "Locomotives"
    $rootScope.pageSubName = "";
        $rootScope.pageinfo =  {
            "Name": "Locomotives",
        }
});

app.controller('EventsController', function($scope, $rootScope) {
    $rootScope.pageClass = "page-events"
    $rootScope.pageName = "Events"
    $rootScope.pageSubName = "";
        $rootScope.pageinfo =  {
            "Name": "Events",
        }
});

app.controller('VenueController', function($scope, $rootScope) {
    $rootScope.pageClass = "page-venue"
    $rootScope.pageName = "Our Venue"
    $rootScope.pageSubName = "";
        $rootScope.pageinfo =  {
            "Name": "Venue",
        }
});

app.controller('SponsorsController', function($scope, $rootScope) {
    $rootScope.pageClass = "page-sponsors"
    $rootScope.pageName = "Our Sponsors"
    $rootScope.pageSubName = "";
        $rootScope.pageinfo =  {
            "Name": "Sponsors",
        }
});



app.config(function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });
    $routeProvider
    .when("/", {
        templateUrl : "pages/home.html",
        controller: 'HomeController',
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



// DIRECTIVES
app.directive('hero', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            header: '@',
            subheader: '@'
        },
        template: '<div class="splash" style="background-image: url(\'https://source.unsplash.com/900x600?tree&sig={{header}}\');"><div class="splash-content"><h1>{{header}}</h1><h2>{{subheader}}</h2></div></div>',
        controller: function ($scope) {}
    }
});

app.directive('locomotive', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            name: '@',
            desc: '@',
            src: '@'
        },
        template: '<div class="locomotive"><div class="pic" style="background-image: url(\'{{src}}\')"></div><h3>{{name}}</h3><p>{{desc}}</p></div>',
        controller: function ($scope) {}
    }
})