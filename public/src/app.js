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
            })
            .when('/loanee/:id', {
                controller: 'SingleController',
                templateUrl: 'views/single.html'
            })
            .when('/settings', {
                controller: 'SettingsController',
                templateUrl: 'views/settings.html'
            })
            .otherwise({
                redirectTo: '/loanees'
            });

        $locationProvider.html5Mode(true);
    })

.value('options', {})
    .run(function(options, Fields) {
        Fields.get().success(function(data) {
            options.displayed_fields = data;
        });
    });
