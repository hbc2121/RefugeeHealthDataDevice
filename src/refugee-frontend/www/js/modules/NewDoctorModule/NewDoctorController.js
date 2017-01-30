angular.module('NewDoctorCtrl')
.controller('NewDoctorCtrl', function($scope, $state) {

    $scope.submit = function() {
        $state.transitionTo('doctor-login');
    }

})


