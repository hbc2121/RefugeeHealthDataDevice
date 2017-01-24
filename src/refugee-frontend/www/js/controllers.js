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

.controller('ExistingPatientCtrl', function($scope, Questions, $state) {
    var questions = Questions.all().then(function (data) {
        console.log(data.questions);
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

.controller('NewPatientQuestionsCtrl', function($scope, $state) {

    $scope.submit = function() {
        $state.transitionTo('visit-confirmation');
    }

});
