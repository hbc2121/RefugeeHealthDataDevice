angular.module('PatientQuestionsModule')
.controller('PatientQuestionsCtrl', function($scope, $state, $stateParams, $timeout, $rootScope, $ionicScrollDelegate, $ionicPopup,
            Questions, Forms, ResponseData, HPRTScoring) {

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

    // public properties
    $scope.selected;
    $scope.forms;
    $scope.categories;

    // private methods
    function init() {

        // scroll to top of page
        // Note: because ionic caches views, without this
        //       next time page opens it'll be scrolled to 
        //       wherever it left off
        $timeout(function() {
            $ionicScrollDelegate.scrollTop();
        });

        // reset public properties
        $scope.selected   = 0;
        $scope.forms      = [];
        $scope.categories = [];

        // get all questions
        Questions.new_patient_questions().then(function (data) {

            // initialize a form for each category
            for (var i = 0; i < data.categories.length; i++) {
                var name = data.categories[i];
                var formData = data.forms[i];
                var obj = Forms.formObject(i, name, formData);
                $scope.forms.push(obj);
            }

            $scope.categories = data.categories;
            $scope.loadForm(0);

        }, function(e) {
            console.log("ERROR GETTING DATA", e);
        });

    }

    // public methods
    function loadForm(id) {
        $scope.selected = id;
    }

    function submitForms() {

        // compute scores
        var scores = HPRTScoring.getAllScores($scope.forms);

        // set response data object
        ResponseData.set_response_data($scope.forms);

        scores.firstName = $stateParams.firstName;
        scores.lastName = $stateParams.lastName;
        scores.dateOfBirth = $stateParams.dateOfBirth;

        // navigate to report page
        $state.go("visit-confirmation", scores).then(function() {
            // reinitialize once this is done
            init();
        });

    }

    $scope.showPatientOverview = function() {
        console.log($scope.dateOfBirth);
        $state.go("patient-overview",
        {
            "firstName": $stateParams.firstName,
            "lastName": $stateParams.lastName,
            "dateOfBirth": $stateParams.dateOfBirth
        });
    }

    // attach public methods to scope
    $scope.loadForm = loadForm;
    $scope.submitForms = submitForms;

    init();

});
