angular.module('starter.controllers', [])

.controller('VisitConfirmationCtrl', function($scope, $state, $sce, $stateParams, $ionicPopup, $rootScope, Questions, ResponseData, PatientService) {

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

    function updatePatientAndExit() {
        ResponseData.get_response_data().unshift(finalData);
        pdfData = ResponseData.get_response_data();
        PatientService.updatePatient($stateParams.firstName, $stateParams.lastName, $stateParams.dob, pdfData, $rootScope.user).then(function(data) {
            console.log(data);
        });
        submit();
    }

    $scope.sendEmail = function(email) {
        if (email && email.address != '') {
            ResponseData.get_response_data().unshift(finalData);
            pdfData = ResponseData.get_response_data();
            ResponseData.generatePDF(pdfData, email.address);
            var myPopup = $ionicPopup.show({
                title: 'Email confirmation for ' + email.address,
                subTitle: 'Please select Cancel to stay on this page or Home to go back to the home screen',
                scope: $scope,
                buttons: [
                    { 
                        text: 'Cancel' 
                    }, 
                    {
                        text: '<b>Home</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            updatePatientAndExit();
                        }
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

    function submit() {
        $state.transitionTo('disclaimer');
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
    $scope.updatePatientAndExit = updatePatientAndExit;

});
