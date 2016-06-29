angular.module('DashApp')
    .controller('ListController', function($scope, $rootScope, loanee, $location) {
        $rootScope.PAGE = "all";
        $scope.loanees = loanee.query();
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

.controller('NewController', function($scope, $rootScope, loanee, $location) {
    $rootScope.PAGE = "new";
    $scope.loanee = new loanee({
        firstName: ["", "text"],
        lastName: ["", "text"],
        idNumber: ["", "text"],
        regNumber: ["", "text"],
        type: ["", "text"],
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

.controller('SingleController', function($scope, $rootScope, $location, loanee, $routeParams) {
    $rootScope.PAGE = "single";
    $scope.loanee = loanee.get({
        id: parseInt($routeParams.id, 10)
    });
    $scope.delete = function() {
        $scope.loanee.$delete();
        $location.url('/loanees');
    };
});
