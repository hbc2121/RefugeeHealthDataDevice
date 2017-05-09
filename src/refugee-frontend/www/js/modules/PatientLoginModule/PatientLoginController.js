angular.module('PatientLoginModule')
.controller('PatientLoginCtrl', function($scope, $state, $rootScope, $ionicPopup, PatientService) {

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

    $scope.firstName = "";
    $scope.lastName = "";
    $scope.dob = "";

    function init(patient) {
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.dob = "";
        patient.firstName = "";
        patient.lastName = "";
        patient.dob = "";
    }


    function newPopup(patient, titleString, action) {
        var promptPopup = $ionicPopup.prompt({
            title: titleString,
            subTitle: '',
            scope: $scope,
            template: 'Please enter your username to confirm that you want to add this patient to your active patients',
            inputType: 'text',
            inputPlaceholder: '',
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: '<b>Continue</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        if ($rootScope.user == this.scope.data.response) {
                            if (action == "add new patient") {
                                PatientService.addNewPatient(patient.firstName, patient.lastName, $scope.dob, $rootScope.user);
                                submit(patient, true);
                            } else if (action == "add new patient to doctor") {
                                PatientService.addPatientToDoctor(patient.firstName, patient.lastName, $scope.dob, $rootScope.user).then(function(data) {
                                    console.log(data);
                                    if (data.status == "200") {
                                        submit(patient, true);
                                    }
                                });
                            }
                        } else {
                            newPopup(patient, "Incorrect Doctor Username", action);
                        }
                    }
                }
            ]
        });
    }

    function submit(patient, newPat) {
        if (patient && patient.firstName && patient.lastName && patient.dob) {
            $scope.firstName = patient.firstName;
            $scope.lastName = patient.lastName;
            $scope.dob = patient.dob;

            var params = {
                'firstName': $scope.firstName, 
                'lastName': $scope.lastName, 
                'dob': $scope.dob,
                'doctor': $rootScope.user
            };

            PatientService.getPatient(params).then(function(data) {
                console.log(data.data);
                if ((data.data == "error: no patient found") && (!newPat)) {
                    var myPopup = $ionicPopup.show({
                        title: 'Patient not in database.',
                        subTitle: 'Try adding a new patient.',
                        scope: $scope,
                        buttons: [
                            {   
                                text: 'Cancel'
                            }
                        ]
                    });
                } else if ((data.data == "error: patient not in doctor list") && (!newPat)) {
                    newPopup(patient, "Not Your Patient", "add new patient to doctor");
                } else if (data.data != "error: failed to retrieve patient") {
                    init(patient);
                    $state.go("patient-questions", params);
                }
            });
        } else {
            var myPopup = $ionicPopup.show({
                title: 'Please provide a valid first name, last name, and date of birth',
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
                template: 'Please enter your username to confirm that you want to add this patient to your active patients',
                inputType: 'text',
                inputPlaceholder: '',
                buttons: [
                    {
                        text: 'Cancel'
                    },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if ($rootScope.user == this.scope.data.response) {
                                PatientService.addNewPatient(patient.firstName, patient.lastName, $scope.dob, $rootScope.user);
                                submit(patient, true);
                            } else {
                                newPopup(patient, "Incorrect Doctor Username", "add new patient");
                            }
                        }
                    }
                ]
            });
        } else {
            var myPopup = $ionicPopup.show({
                title: 'Please provide a valid first name, last name, and date of birth',
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
