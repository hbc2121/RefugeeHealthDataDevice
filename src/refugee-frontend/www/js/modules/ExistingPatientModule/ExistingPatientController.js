angular.module('ExistingPatientModule')

.controller('ExistingPatientCtrl', function($scope, $state, Questions) {

    var questions = [];

    Questions.new_patient_questions().then(function (data) {
        questions = data.questions;
        $scope.categories = data.categories;
        $scope.update(data.categories[0]);
    });

    $scope.update = function(category) {
        $scope.selected = category;
        $scope.questions = questions[category];
    }

    $scope.submit = function() {
        $state.transitionTo('visit-confirmation');
    }

})
