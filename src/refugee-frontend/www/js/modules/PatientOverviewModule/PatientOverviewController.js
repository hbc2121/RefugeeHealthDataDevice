angular.module('PatientOverviewModule')
.controller('PatientOverviewCtrl', function($scope, $rootScope, $state, $stateParams, $ionicPopup,PatientService) {

        function init() {
                $scope.filter = "";
                $scope.patients = [];
        }

        $scope.logout = function() {
                $rootScope.logout().then(function() {
                        init();
                }, function() {
                });
        }

        PatientService.getPatientsOfDoctor($rootScope.user).then(function(data) {
                $scope.patients = data.data;
        });

        $scope.hasPatients = function() {
                return $scope.patients.length > 0;
        }

        if ($stateParams.firstName != "" && $stateParams.lastName != "") {
                $scope.filter = $stateParams.firstName + " " + $stateParams.lastName;
        }

        $scope.myFilter = function(name) {
                return (name.firstName + " " + name.lastName == $scope.filter) || (!$scope.filter);
        }

        init();

});
