angular.module('DoctorLoginModule', [])
.controller('DoctorLoginCtrl', function($scope, $state) {

    $scope.submit = function() {
        $state.transitionTo('tab.overview');
    }

});
