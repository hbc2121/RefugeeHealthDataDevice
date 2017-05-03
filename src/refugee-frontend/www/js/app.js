// TODO: REMOVE THIS "STARTER" stuff
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 
                'DisclaimerModule', 'PatientQuestionsModule', 'PatientLoginModule',
                'DoctorLoginModule', 'PatientOverviewModule'])

.config(function($ionicConfigProvider) {
        $ionicConfigProvider.tabs.position('bottom');
})

.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                        cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                        // org.apache.cordova.statusbar required
                        StatusBar.styleDefault();
                }
        });

})

.config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        .state('visit-confirmation', {
                url: '/visit-confirmation/:total/:dsm/:trauma/:anxiety/:depression',
                templateUrl: 'templates/visit-confirmation.html',
                controller: 'VisitConfirmationCtrl'
        })

        .state('doctor-login', {
                url: '/doctor-login',
                templateUrl: 'templates/doctor-login.html',
                controller: 'DoctorLoginCtrl'
        })

        .state('patient-login', {
                url: '/patient-login',
                templateUrl: 'templates/patient-login.html',
                controller: 'PatientLoginCtrl'
        })

        .state('patient-overview', {
                url: '/patient-overview',
                templateUrl: 'templates/patient-overview.html',
                controller: 'PatientOverviewCtrl'
        })

        .state('disclaimer', {
                url: '/disclaimer',
                templateUrl: 'templates/disclaimer.html',
                controller: 'DisclaimerCtrl'
        })

        .state('patient-questions', {
                url: '/patient-questions/:firstName/:lastName/:dob',
                templateUrl: 'templates/patient-questions.html',
                controller: 'PatientQuestionsCtrl'
        });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/doctor-login');
});
