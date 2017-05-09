angular.module('DoctorLoginModule')
.controller('DoctorLoginCtrl', function($scope, $state, $rootScope, $ionicPopup, AuthService) {

        $scope.username = "";
        $scope.password = "";

        function login(doctor) {
                if (doctor && doctor.username && doctor.password) {
                        AuthService.login(doctor).then(function(data) {
                                $rootScope.user = doctor.username;
                               if (data.data) {
                                    doctor.username = "";
                                    doctor.password = "";
                                    $state.go("disclaimer");
                                } else {
                                    showPopUp("No account for user.");
                                }
                        }, function(err) {
                                console.log(err);
                        });
                } else {
                        showPopUp("Please fill out all fields");
                }
        }

        function addNewDoctor(doctor) {
                if (doctor && doctor.username && doctor.password) {
                        $ionicPopup.prompt({
                                title: 'Doctor Information for ' + doctor.username,
                                scope: $scope,
                                template: 'Please re-enter your desired password', 
                                inputType: 'text',
                                buttons: [
                                {
                                        text: 'Cancel'
                                },
                                {
                                        text: 'Submit',
                                        type: 'button-positive',
                                        onTap: function(e) {
                                                if (doctor.password == this.scope.data.response) {
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
