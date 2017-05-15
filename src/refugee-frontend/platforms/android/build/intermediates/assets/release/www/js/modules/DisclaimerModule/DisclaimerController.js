angular.module('DisclaimerModule')
.controller('DisclaimerCtrl', function($scope, $state, $ionicPopup, $rootScope) {
    
        function init() {
        }

        $scope.logout = function() {
                $rootScope.logout().then(function() {
                        init();
                }, function() {
                });
        }


        $scope.submit = function() {
                $state.go('patient-login');
        }

        $scope.patientOverview = function() {
                $state.go('patient-overview');
        }

        init();

});
