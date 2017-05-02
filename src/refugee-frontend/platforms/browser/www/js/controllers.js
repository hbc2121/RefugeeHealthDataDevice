angular.module('starter.controllers', ["ngCordova"])

.controller('VisitConfirmationCtrl', function($scope, $state, $sce, $stateParams, $cordovaFile, Questions, ResponseData) {

        $scope.emailPrompt = false;
        $scope.email = "";

        $scope.submit = function() {
                ResponseData.generatePDF(ResponseData.get_response_data()).then(function(data) {
                });
                //$state.transitionTo('tab.disclaimer');
        }

        $scope.exportPDF = function() {
                $scope.emailPrompt = true;
        }

        $scope.export = function() {
                console.log($scope.email);
        }

        // two decimal places
        for (key in $stateParams) {
                $stateParams[key] = Number($stateParams[key]).toFixed(2);
        }

        $scope.scores = $stateParams;

});
