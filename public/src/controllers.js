angular.module('DashApp')
    .controller('ListController', function($scope, loanee, $location) {
        $scope.loanees = loanee.query();
        $scope.fields = ['firstName', 'lastName'];

        $scope.sort = function (field) {
        	$scope.sort.field = field;
        	$scope.sort.order = !$scope.sort.order;
        };

        $scope.sort.field = 'firstName';
        $scope.sort.order = false;

        $scope.show = function(id) {
            $location.url('/loanee/' + id);
        }
    });
