angular.module('DashApp', ['ngRoute', 'ngResource', 'ngMessages'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/loanees', {
                controller: 'ListController',
                templateUrl: 'views/loanee.html'
            })
            .when('/loanee/new', {
            	controller: 'NewController',
            	templateUrl: 'views/new.html'
            });

        $locationProvider.html5Mode(true);
    });
