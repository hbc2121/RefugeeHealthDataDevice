angular.module('PatientOverviewModule')
.controller('PatientOverviewCtrl', function($scope, $state, $stateParams) {

    console.log($stateParams);
    $scope.filter = $stateParams.name;

    $scope.myFilter = function(name) {
        return (name.firstName + " " + name.lastName == $scope.filter) || (!$scope.filter);
    }

    $scope.patients = 
        [
            {
                'firstName': 'Danielle',
                'lastName': 'Zelin',
                'dob': '10/26/1995',
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


});
