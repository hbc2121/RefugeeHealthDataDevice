angular.module('DoctorLoginModule')
.controller('DoctorLoginCtrl', function($scope, $state, $ionicPopup) {

    $scope.newPat = false;
    $scope.username = "";
    $scope.password = "";
    $scope.dob = "";

    function submit(doctor) {
        if (doctor && doctor.username && doctor.password) {
            $scope.username = doctor.username;
            $scope.password = doctor.password;
            var params = {
                'username': $scope.username, 
                'password': $scope.password, 
                'dob': $scope.dob
            };
            $state.go("disclaimer", params);
        } else {
            var myPopup = $ionicPopup.show({
                title: 'Please provide a valid first name and last name',
                subTitle: '',
                scope: $scope,
                buttons: [
                    {   
                        text: 'Cancel'
                    }
                ]
            });
        }
    }

    $scope.newDoctor = function(doctor) {
        $scope.newPat = true;
        if (doctor && doctor.username && doctor.password ) {
            var promptPopup = $ionicPopup.prompt({
                title: 'Doctor Information for:',
                subTitle: doctor.username,
                scope: $scope,
                template: 'Date of Birth',
                inputType: 'text',
                inputPlaceholder: 'mm/dd/yyyy',
                buttons: [
                    {
                        text: 'Cancel'
                    },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            $scope.dob = this.scope.data.response;
                            submit(doctor);
                        }
                    }
                ]
            });
        } else {
            var myPopup = $ionicPopup.show({
                title: 'Please provide a valid first name and last name',
                subTitle: '',
                scope: $scope,
                buttons: [
                {   
                    text: 'Cancel'
                }
                ]
            });
        }
    }

    $scope.submit = submit;
});
