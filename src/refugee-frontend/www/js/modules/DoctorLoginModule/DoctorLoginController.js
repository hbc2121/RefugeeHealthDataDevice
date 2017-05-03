angular.module('DoctorLoginModule')
.controller('DoctorLoginCtrl', function($scope, $state, $rootScope, $ionicPopup, AuthService) {

        $scope.username = "";
        $scope.password = "";

        function login(doctor) {
                if (doctor && doctor.username && doctor.password) {
                        AuthService.login(doctor).then(function(data) {
                                $rootScope.user = data;
                                $state.go("disclaimer");
                        });
                } else {
                        showPopUp("Please fill out all fields");
                }
        }

        function addNewDoctor(doctor) {
                if (doctor && doctor.username && doctor.password) {
                        $ionicPopup.prompt({
                                title: 'Doctor Information for:',
                                subTitle: doctor.username,
                                scope: $scope,
                                template: 'Please re-enter your desired password', 
                                inputType: 'text',
                                buttons: [
                                {
                                        text: 'Cancel'
                                },
                                {
                                        text: '<b>Save</b>',
                                        type: 'button-positive',
                                        onTap: function(e) {
                                                if ($scope.password == this.scope.data.response) {
                                                        AuthService.addDoctor(doctor).then(function(data) {
                                                                login(doctor);
                                                        });
                                                } else {
                                                        showPopUp("Passwords do not match");
                                                }
                                        }
                                }]
                        });
                } else {
                        showPopUp("Please fill out all fields");
                }
        }

        function showPopUp(message) {
                $ionicPopup.show({
                        title: message,
                        subTitle: '',
                        scope: $scope,
                        buttons: [{ text: 'Close' }]
                });
        }

        $scope.login = login;
        $scope.addNewDoctor = addNewDoctor;

});
