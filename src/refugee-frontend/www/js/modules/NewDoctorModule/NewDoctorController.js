angular.module('NewDoctorModule')
.controller('NewDoctorCtrl', function($scope, $state) {

    $scope.submit = function() {
        $state.transitionTo('doctor-login');
    }

})


