angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('OverviewCtrl', function($scope) {})

.controller('ExistingPatientCtrl', function($scope, Questions) {
        var questions = Questions.all().then(function (data) {
                console.log(data.questions);
        });
})

.controller('DoctorLoginCtrl', function($scope) {});
