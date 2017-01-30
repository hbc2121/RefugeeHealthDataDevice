angular.module('ExistingPatientModule')

.controller('ExistingPatientCtrl', function($scope, $state, Questions) {

    Questions.existing_patient_questions().then(function (data) {
        $scope.questions = data.questions
    });

    $scope.submit = function() {
        $state.transitionTo('visit-confirmation');
    }

})
