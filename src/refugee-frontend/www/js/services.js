angular.module('starter.services', [])

.factory('Questions', function($http) {

        return {
                all: function() {

                        var promise =  $http({
                                method: "GET",
                                url: "dummy-question-data.json"
                        }).then(function success(response) {
                                console.log("got data");
                                return response.data;
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
