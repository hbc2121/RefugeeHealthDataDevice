angular.module('PatientLoginModule')
.controller('PatientLoginCtrl', function($scope, $state, $rootScope, $ionicPopup, PatientService) {
    $scope.firstName;
    $scope.lastName;
    $scope.dateOfBirth;
    $scope.patient;

    function formatDate(patient) {
        date = JSON.stringify(patient.dateOfBirth).split(/\D/g);
        month = date[2];
        day = date[3];
        year = date[1];
        $scope.dateOfBirth = (month + '-' + day + '-' + year).replace(/"/g, "'");
    }

    function init() {
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.dateOfBirth = "";
        $scope.patient = {
            firstName: "",
            lastName: "",
            dateOfBirth: ""
        };
    }

    $scope.logout = function() {
        $rootScope.logout().then(function() {
            init();
        }, function() {
        });
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
                            PatientService.addNewPatient($scope.firstName, $scope.lastName, $scope.dateOfBirth, $rootScope.user);
                            submit(patient, true);
                        } else if (action == "add new patient to doctor") {
                            PatientService.addPatientToDoctor($scope.firstName, $scope.lastName, $scope.dateOfBirth, $rootScope.user).then(function(data) {
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
        console.log("LOGIN", $rootScope.user);
        if (patient && patient.firstName && patient.lastName && patient.dateOfBirth) {
            $scope.firstName = patient.firstName;
            $scope.lastName = patient.lastName;
            formatDate(patient);

            PatientService.loginPatient($scope.firstName, $scope.lastName, $scope.dateOfBirth);
            var params = PatientService.loggedInPatient();
            params.doctor = $rootScope.user;

            PatientService.getPatient(params).then(function(data) {
                console.log(data);
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
                } else if (((data.data == "error: patient not in doctor list") || (data.data == "error")) && (!newPat)) {
                    newPopup(patient, "Not Your Patient", "add new patient to doctor");
                } else if (data.data != "error: failed to retrieve patient") {
                    $state.go("patient-questions").then(function() {
                        init();
                    });
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
        if (patient && patient.firstName && patient.lastName && patient.dateOfBirth) {
            $scope.firstName = patient.firstName;
            $scope.lastName = patient.lastName;
            formatDate(patient);

            PatientService.loginPatient($scope.firstName, $scope.lastName, $scope.dateOfBirth);
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
                            PatientService.addNewPatient($scope.firstName, $scope.lastName, $scope.dateOfBirth, $rootScope.user);
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

    init();
    $scope.submit = submit;

});
