angular.module('PatientOverviewModule')
.controller('PatientOverviewCtrl', function($scope, $rootScope, $state, $stateParams, $ionicPopup, $rootScope, PatientService) {

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


    PatientService.getPatientsOfDoctor($rootScope.user).then(function(data) {
        if (data.data.length == 0) {
            $scope.patients = [{
                'firstName': 'This doctor has no patients',
                'lastName': '',
                'dateOfBirth': '',
                'visits': []
            }]
        } else {
            $scope.patients = data.data;
        }
    });

    $scope.filter = "";
    if ($stateParams.firstName != "" && $stateParams.lastName != "") {
        $scope.filter = $stateParams.firstName + " " + $stateParams.lastName;
    }

    $scope.myFilter = function(name) {
        console.log($scope.filter);
        return (name.firstName + " " + name.lastName == $scope.filter) || (!$scope.filter);
    }

});
