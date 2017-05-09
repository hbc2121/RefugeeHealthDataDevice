angular.module('PatientOverviewModule')
.controller('PatientOverviewCtrl', function($scope, $state, $stateParams, $ionicPopup, $rootScope, PatientService) {

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

    $scope.patients = 
        [
            {
                'firstName': 'hi',
                'lastName': 'hi',
                'dob': 'hi',
                'visits':
                    [
                        {
                            'date': '1/1/2017',
                            'scores': 
                                {
                                    'Trauma Symptoms Total Score': 0.00,
                                    'Trauma Symptoms DSM-IV Score': 0.00,
                                    'Hopkins Symptom Total Score': 0.00,
                                    'Hopkins Symptom Anxiety Score': 0.00,
                                    'Hopkins Symptom Depression Score': 0.00
                                }
                        },
                        {
                            'date': '1/2/2017',
                            'scores':
                                {
                                    'Trauma Symptoms Total Score': 0.00,
                                    'Trauma Symptoms DSM-IV Score': 0.00,
                                    'Hopkins Symptom Total Score': 0.00,
                                    'Hopkins Symptom Anxiety Score': 0.00,
                                    'Hopkins Symptom Depression Score': 0.00
                                }
                        }
                    ]
            },
            {
                'firstName': 'Hayley',
                'lastName': 'Cohen',
                'dob': '9/5/1995',
                'visits':
                    [
                        {
                            'date': '1/1/2017',
                            'scores':
                                {
                                    'Trauma Symptoms Total Score': 0.00,
                                    'Trauma Symptoms DSM-IV Score': 0.00,
                                    'Hopkins Symptom Total Score': 0.00,
                                    'Hopkins Symptom Anxiety Score': 0.00,
                                    'Hopkins Symptom Depression Score': 0.00
                                }
                        },
                        {
                            'date': '1/1/2017',
                            'scores':
                                {
                                    'Trauma Symptoms Total Score': 0.00,
                                    'Trauma Symptoms DSM-IV Score': 0.00,
                                    'Hopkins Symptom Total Score': 0.00,
                                    'Hopkins Symptom Anxiety Score': 0.00,
                                    'Hopkins Symptom Depression Score': 0.00
                                }
                        },
                        {
                            'date': '1/2/2017',
                            'scores':
                                {
                                    'Trauma Symptoms Total Score': 0.00,
                                    'Trauma Symptoms DSM-IV Score': 0.00,
                                    'Hopkins Symptom Total Score': 0.00,
                                    'Hopkins Symptom Anxiety Score': 0.00,
                                    'Hopkins Symptom Depression Score': 0.00
                                }
                        }

                    ]
            }
        ]

    $scope.filter = "";

    $scope.myFilter = function(name) {
        return (name.firstName + " " + name.lastName == $scope.filter) || (!$scope.filter);
    }



});
