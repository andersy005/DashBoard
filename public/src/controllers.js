angular.module('DashApp')
    .controller('ListController', function($scope, $rootScope, Loanee, $location, options) {
        $rootScope.PAGE = "all";
        $scope.loanees = Loanee.query();
        $scope.fields = ['firstName', 'lastName'];

        $scope.sort = function(field) {
            $scope.sort.field = field;
            $scope.sort.order = !$scope.sort.order;
        };

        $scope.sort.field = 'firstName';
        $scope.sort.order = false;

        $scope.show = function(id) {
            $location.url('/loanee/' + id);
        };
    })

.controller('NewController', function($scope, $rootScope, Loanee, $location) {
    $rootScope.PAGE = "new";
    $scope.loanee = new Loanee({
        firstName: ["", "text"],
        lastName: ["", "text"],
        idNumber: ["", "text"],
        regNumber: ["", "text"],
        category: ["", "text"],
        phone: ["", "tel"],
        email: ["", "email"],
        district: ["", "text"],
        sector: ["", "text"],
        cell: ["", "text"],
        village: ["", "text"],
        tinNumber: ["", "text"],
        rssbNumber: ["", "text"],
        employer: ["", "text"]

    });

    $scope.save = function() {
        if ($scope.newLoanee.$invalid) {
            $scope.$broadcast("record:invalid");
        } else {
            $scope.loanee.$save();
            $location.url('/loanees');
        }

    };
})

.controller('SingleController', function($scope, $rootScope, $location, Loanee, $routeParams) {
    $rootScope.PAGE = "single";
    $scope.loanee = Loanee.get({
        id: parseInt($routeParams.id, 10)
    });
    $scope.delete = function() {
        $scope.loanee.$delete();
        $location.url('/loanees');
    };
})


.controller('SettingsController', function($scope, $rootScope, options, Fields) {
    $rootScope.PAGE = "settings";

    $scope.allFields = [];
    $scope.fields = options.displayed_fields;

    Fields.headers().then(function(data) {
        $scope.allFields = data;
    });

    $scope.toggle = function(field) {
        var i = options.displayed_fields.indexOf(field);

        if(i > -1) {
            options.displayed_fields.splice(i, 1);
        
        } else {
            options.displayed_fields.push(field);

        }

        fields.set(options.displayed_fields);
    }; 
});
