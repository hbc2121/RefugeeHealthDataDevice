angular.module('DisclaimerModule')
.controller('DisclaimerCtrl', function($scope, $state, $ionicPopup, $rootScope) {

    $scope.logout = function() {
        var myPopup = $ionicPopup.show({
            title: 'You will lose all the data from this session.',
            subTitle: 'Do you wish to continue?',
            scope: $scope,
            buttons: [
                {   
                    text: 'Cancel'
                },
                {
                    text: '<b>Continue</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        $rootScope.user = "";
                        $state.go('doctor-login');
                    }
                }
            ]
        });
    }

    $scope.submit = function() {
        $state.go('patient-login');
    }

    $scope.patientOverview = function() {
        $state.go('patient-overview');
    }
});
