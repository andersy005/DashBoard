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
        };
    })

    .controller('NewController', function($scope, loanee, $location) {
        $scope.loanee =  new loanee ({
            firstName: ["", "text"],
            lastName: ["", "text"],
            idNumber:["", "text"],
            regNumber:["", "text"],
            type:["", "text"],
            phone:["", "tel"],
            email:["", "email"],
            district:["", "text"],
            sector:["", "text"],
            cell:["", "text"],
            village:["", "text"],
            tinNumber:["", "text"],
            rssbNumber:["", "text"],
            employer:["", "text"]

        });

        $scope.save = function(){
            if($scope.newLoanee.$invalid){
                $scope.$broadcast("record:invalid");
            } else{
                $scope.loanee.$save();
                $location.url('/loanees');
            }

        };
    });
