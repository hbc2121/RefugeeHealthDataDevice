angular.module('starter.controllers', [])

.controller('VisitConfirmationCtrl', function($scope, $state, $sce, $stateParams, $ionicPopup, $rootScope, Questions, ResponseData, PatientService) {

        function init() {
        }

        $scope.emailPrompt = false;

        finalData = {
                "category": "Overview",
                "questions":[
                {
                        "body":"Trauma Symptoms Total Score",
                        "value": $stateParams.trauma
                },
                {
                        "body":"Trauma Symptoms DSM-IV Score",
                        "value": $stateParams.dsm
                },
                {
                        "body":"Hopkins Total Score",
                        "value": $stateParams.total
                },
                {
                        "body":"Hopkins Anxiety Score",
                        "value": $stateParams.anxiety
                },
                {
                        "body":"Hopkins Depression Score",
                        "value": $stateParams.depression
                }
                ],
                "additional_comments": "Hopkins and Trauma Scores"
        };

        function updatePatient() {
                ResponseData.get_response_data().unshift(finalData);
                pdfData = ResponseData.get_response_data();
                PatientService.updatePatient($stateParams.firstName, $stateParams.lastName, $stateParams.dateOfBirth, pdfData, $rootScope.user).then(function(data) {
                        console.log(data);
                        if (data.data == "OK") {
                                var myPopup = $ionicPopup.show({
                                        title: 'This visit has been saved',
                                        subTitle: 'Would you like to leave this page?',
                                        scope: $scope,
                                        buttons: [
                                        { 
                                                text: '<b>Yes</b>',
                                                type: 'button-positive',
                                                onTap: function(e) {
                                                        submit(true);
                                                }
                                        }, 
                                        {
                                                text: '<b>No</b>',
                                                type: 'button-assertive',
                                        }
                                        ]
                                });
                        } else {
                                var myPopup = $ionicPopup.show({
                                        title: 'Error',
                                        subTitle: 'This visit could not be saved. Please try again',
                                        scope: $scope,
                                        buttons: [
                                        { 
                                                text: 'Ok'
                                        }
                                        ]
                                });
                        }
                });
        }

        $scope.sendEmail = function(email) {
                if (email && email.address != '') {
                        ResponseData.get_response_data().unshift(finalData);
                        pdfData = ResponseData.get_response_data();
                        ResponseData.generatePDF(pdfData, email.address);
                        var myPopup = $ionicPopup.show({
                                title: 'Email Confirmation',
                                subTitle: 'An email has been sent to ' + email.address,
                                scope: $scope,
                                buttons: [
                                { 
                                        text: 'Ok'
                                } 
                                ]
                        });
                } else {
                        var myPopup = $ionicPopup.show({
                                title: 'Please provide an email',
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

        $scope.showPatientOverview = function() {
                $state.go("patient-overview", {
                        "firstName": $stateParams.firstName,
                        "lastName": $stateParams.lastName,
                        "dateOfBirth": $stateParams.dateOfBirth
                });
        }

        function submit(saved) {
                if (saved) {
                        $state.transitionTo('disclaimer');
                } else {
                        var myPopup = $ionicPopup.show({
                                title: 'This visit is currently not saved',
                                subTitle: 'Would you like to save?',
                                scope: $scope,
                                buttons: [
                                { 
                                        text: '<b>Yes</b>',
                                        type: 'button-positive',
                                        onTap: function(e) {
                                                updatePatient();
                                        }
                                },
                                {
                                        text: '<b>No</b>',
                                        type: 'button-assertive',
                                        onTap: function(e) {
                                                $state.transitionTo('disclaimer');
                                        }
                                }
                                ]
                        });
                }
        }

        $scope.exportPDF = function() {
                $scope.emailPrompt = true;
        }

        // two decimal places
        for (key in $stateParams) {
                if (typeof($stateParams[key]) == 'number') {
                        $stateParams[key] = Number($stateParams[key]).toFixed(2);
                }
        }

        $scope.scores = $stateParams;
        $scope.submit = submit;
        $scope.updatePatient = updatePatient;

});
