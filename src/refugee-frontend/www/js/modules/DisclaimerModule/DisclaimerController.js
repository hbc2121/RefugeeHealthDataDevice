angular.module('DisclaimerModule')
.controller('DisclaimerCtrl', function($scope, $state) {

    $scope.submit = function() {
        $state.go('patient-login');
    }
});
