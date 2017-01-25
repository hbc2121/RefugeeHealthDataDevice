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

    Questions.existing_patient_questions().then(function (data) {
        $scope.questions = data.questions
    });

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

    Questions.new_patient_questions().then(function (data) {
        $scope.questions = data.questions
    });

    $scope.submit = function() {
        $state.transitionTo('visit-confirmation');
    }

});
