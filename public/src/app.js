angular.module('DashApp', ['ngRoute', 'ngResource'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/loanees', {
                controller: 'ListController',
                templateUrl: 'views/loanee.html'
            });

        $locationProvider.html5Mode(true);
    });
