angular.module('NewPatientModule')
.controller('NewPatientCtrl', function($scope, $state) {

    $scope.submit = function() {
        $state.transitionTo('new-patient-questions');
    }

})
