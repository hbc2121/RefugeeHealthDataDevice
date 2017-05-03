angular.module('PatientLoginModule')
.controller('PatientLoginCtrl', function($scope, $state, $ionicPopup) {

    $scope.firstName = "";
    $scope.lastName = "";
    $scope.dob = "";

    function init(patient) {
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.dob = "";
        patient.firstName = "";
        patient.lastName = "";
    }

    function submit(patient) {
        if (patient && patient.firstName && patient.lastName) {
            $scope.firstName = patient.firstName;
            $scope.lastName = patient.lastName;
            var params = {
                'firstName': $scope.firstName, 
                'lastName': $scope.lastName, 
                'dob': $scope.dob
            };
            init(patient);
            $state.go("patient-questions", params);
        } else {
            var myPopup = $ionicPopup.show({
                title: 'Please provide a valid first name and last name',
                subTitle: '',
                scope: $scope,
                buttons: [
                    {   
                        text: 'Cancel'
                    }
                ]
            });
        }
    }

    $scope.newPatient = function(patient) {
        if (patient && patient.firstName && patient.lastName ) {
            var promptPopup = $ionicPopup.prompt({
                title: 'Patient Information for:',
                subTitle: patient.firstName + ' ' + patient.lastName,
                scope: $scope,
                template: 'Date of Birth',
                inputType: 'text',
                inputPlaceholder: 'mm/dd/yyyy',
                buttons: [
                    {
                        text: 'Cancel'
                    },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            $scope.dob = this.scope.data.response;
                            submit(patient);
                        }
                    }
                ]
            });
        } else {
            var myPopup = $ionicPopup.show({
                title: 'Please provide a valid first name and last name',
                subTitle: '',
                scope: $scope,
                buttons: [
                {   
                    text: 'Cancel'
                }
                ]
            });
        }
    }

    $scope.submit = submit;

});
