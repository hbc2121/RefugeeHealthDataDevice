angular.module('NewPatientQuestionsModule')
.controller('NewPatientQuestionsCtrl', function($scope, $state, Questions) {

    Questions.new_patient_questions().then(function (data) {
        $scope.questions = data.questions
    });

    $scope.submit = function() {
        $state.transitionTo('visit-confirmation');
    }

});
