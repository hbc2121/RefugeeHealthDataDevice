angular.module('PatientLoginModule')
.controller('PatientLoginCtrl', function($scope, $state) {

    $scope.submit = function() {
        $state.transitionTo('existing-patient');
    }

});
