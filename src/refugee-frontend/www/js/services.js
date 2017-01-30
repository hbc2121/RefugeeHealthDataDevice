angular.module('starter.services', [])

.service('AuthService', function($q, $http, USER_ROLES) {
        // TODO: finish this obv
})

.factory('Questions', function($http) {

        return {
                existing_patient_questions: function() {

                        var promise =  $http({
                                method: "GET",
                                url: "dummy-question-data.json"
                        }).then(function success(response) {
                                var questionData = {};
                                questionData.categories = Object.keys(response.data);
                                questionData.questions = response.data;
                                return questionData;
                        }, function failure(response) {
                                console.log("did not get data");
                        });

                        return promise;

                },
                new_patient_questions: function() {

                        var promise =  $http({
                                method: "GET",
                                url: "dummy-new-patient-data.json"
                        }).then(function success(response) {
                                var questionData = {};
                                questionData.categories = Object.keys(response.data);
                                questionData.questions = response.data;
                                return questionData;
                        }, function failure(response) {
                                console.log("did not get data");
                        });

                        return promise;

                },
                remove: function(chat) {
                        chats.splice(chats.indexOf(chat), 1);
                },
                get: function(chatId) {
                        for (var i = 0; i < chats.length; i++) {
                                if (chats[i].id === parseInt(chatId)) {
                                        return chats[i];
                                }
                        }
                        return null;
                }
        };

});
