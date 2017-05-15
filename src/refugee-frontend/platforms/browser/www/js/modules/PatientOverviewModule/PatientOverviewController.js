angular.module('PatientOverviewModule')
.controller('PatientOverviewCtrl', function($scope, $rootScope, $state, $ionicPopup, PatientService) {

        function init() {
                $scope.filter = null;
                $scope.patients = [];
        }

        $scope.logout = function() {
                $rootScope.logout().then(function() {
                        init();
                }, function() {
                });
        }

        PatientService.getPatientsOfDoctor($rootScope.user).then(function(data) {
                console.log("OVERVIEW", $rootScope.user);
                console.log("data", data);
                console.log("data.data", data.data);
                $scope.patients = data.data;
        });

        $scope.hasPatients = function() {
                return $scope.patients.length > 0;
        }


        $scope.myFilter = function(name) {
            var p = PatientService.loggedInPatient();
            if (p.firstName != "" && p.lastName != "") {
                    $scope.filter = p.firstName + " " + p.lastName;
            } else {
                $scope.filter = null;
            }
            return (name.firstName + " " + name.lastName == $scope.filter) || (!$scope.filter);
        }

        init();

});
