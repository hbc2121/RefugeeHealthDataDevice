angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('OverviewCtrl', function($scope) {})

.controller('VisitConfirmationCtrl', function($scope, $state) {

    $scope.submit = function() {
        $state.transitionTo('tab.overview');
    }

})

.controller('DoctorLoginCtrl', function($scope, $state) {

    $scope.submit = function() {
        $state.transitionTo('tab.overview');
    }

})

.controller('NewDoctorCtrl', function($scope, $state) {

    $scope.submit = function() {
        $state.transitionTo('doctor-login');
    }

})

.controller('PatientLoginCtrl', function($scope, $state) {

    $scope.submit = function() {
        $state.transitionTo('existing-patient');
    }

})

.controller('ExistingPatientCtrl', function($scope, $state, Questions) {

    var selected = "";
    var questions = [];

    Questions.new_patient_questions().then(function (data) {
        questions = data.questions;
        $scope.categories = data.categories;
        $scope.update(data.categories[0]);
    });

    $scope.update = function(category) {
        selected = category;
        $scope.questions = questions[selected];
    }

    $scope.submit = function() {
        $state.transitionTo('visit-confirmation');
    }

})

.controller('NewPatientCtrl', function($scope, $state) {

    $scope.submit = function() {
        $state.transitionTo('new-patient-questions');
    }

})

.controller('NewPatientQuestionsCtrl', function($scope, $state, Questions) {

    var selected = "";
    var questions = [];

    Questions.new_patient_questions().then(function (data) {
        questions = data.questions;
        $scope.categories = data.categories;
        $scope.update(data.categories[0]);
    });

    $scope.update = function(category) {
        selected = category;
        $scope.questions = questions[selected];
    }

    $scope.submit = function() {
        $state.transitionTo('visit-confirmation');
    }

});
