angular.module('starter.services', [])
.service("AuthService", function($q, $http, USER_ROLES, API_PATH) {

        function login(doctor) {
                var promise = $http({
                        method: "POST",
                        url: API_PATH + "/login",
                        data: {
                                "username": doctor.username,
                                "password": doctor.password
                        }
                });
                return promise;
        }

        function addDoctor(doctor) {
                var promise = $http({
                        method: "POST",
                        url: API_PATH + "/addDoctor",
                        data: {
                                "username": doctor.username,
                                "password": doctor.password
                        }
                });
                return promise;
        }

        return {
                "login": login,
                "addDoctor": addDoctor
        };

})

.service("PatientService", function($q, $http, API_PATH) {

        function addNewPatient(first, last, dob, doctor) {
                var promise = $http({
                        method: "POST",
                        url: API_PATH + "/addNewPatient",
                        data: {
                                "firstName": first,
                                "lastName": last,
                                "dateOfBirth": dob,
                                "username": doctor.username
                        }
                });
                return promise;
        }

        function updatePatient(first, last, dob, visitObj, doctor) {
                var promise = $http({
                        method: "POST",
                        url: API_PATH + "/updatePatient",
                        data: {
                                "firstName": first,
                                "lastName": last,
                                "dateOfBirth": dob,
                                "visit": visitObj,
                                "username": doctor.username
                        }
                });
                return promise;
        }

        function getPatientsOfDoctor(doctor) {
                var promise = $http({
                        method: "GET",
                        url: API_PATH + "/getPatientsOfDoctor?username=" + doctor.username
                });
                return promise;
        }

        function getPatient(patient) {
                var params = "?firstName=" + patient.firstName + "&lastName=" + patient.lastName + "&dob=" + patient.dob
                        var promise = $http({
                                method: "GET",
                                url: API_PATH + "/getPatient" + params
                        });
                return promise;
        }

        function getAllPatients() {
                var promise = $http({
                        method: "GET",
                        url: API_PATH + "/getAllPatients"
                });
                return promise;
        }

        function deletePatient(patient) {
                var promise = $http({
                        method: "POST",
                        url: API_PATH + "/deletePatient",
                        data: {
                                "firstName": patient.first,
                                "lastName": patient.last,
                                "dateOfBirth": patient.dob
                        }
                });
                return promise;
        }

        return {
                "addNewPatient": addNewPatient,
                "updatePatient": updatePatient,
                "getPatient": getPatient,
                "getPatientsOfDoctor": getPatientsOfDoctor,
                "getAllPatients": getAllPatients,
                "deletePatient": deletePatient
        };

})

.service("DoctorService", function($q, $http, API_PATH) {

        function removeDoctor (username) {
                var promise = $http({
                        method: "POST",
                        url: API_PATH + "/removeDoctor",
                        data: {
                                "username": username
                        }
                });
                return promise;
        }

})

.factory("HPRTScoring", function() {

        function computeTraumaSymptomsDSMIV(questions) {
                var score = 0.0;
                for (var i = 0; i < questions.length; i++) {
                        score = score + questions[i].score;
                }
                return score/16.00;
        }

        function computeTraumaSymptomsGeneral(questions) {
                var score = 0.0;
                for (var i = 0; i < questions.length; i++) {
                        score = score + questions[i].score;
                }
                return score;
        }

        function computeHopkinsSymptomsAnxiety(questions) {
                var score = 0.0;
                for (var i = 0; i < questions.length; i++) {
                        score = score + questions[i].score;
                }
                return score/10.00;
        }

        function computeHopkinsSymptomsDepression(questions) {
                var score = 0.0;
                for (var i = 0; i < questions.length; i++) {
                        score = score + questions[i].score;
                }
                return score/15.00;
        }

        function computeTotalScore(anxiety, depression) {
                return ((anxiety*10.0) + (depression*15))/25.00;
        }

        return {

                getAllScores: function(forms) {

                        var scores = {
                                "total": 0.0,
                                "dsm": 0.0,
                                "trauma": 0.0,
                                "anxiety": 0.0,
                                "depression": 0.0
                        };
                        for (var i = 0; i < forms.length; i++) {
                                switch (forms[i].category) {
                                        case "Trauma Symptoms DSM-IV":
                                                scores.dsm = computeTraumaSymptomsDSMIV(forms[i].questions);
                                                break;
                                        case "Trauma Symptoms General":
                                                scores.trauma = computeTraumaSymptomsGeneral(forms[i].questions);
                                                break;
                                        case "Hopkins Symptom Checklist Part1":
                                                scores.anxiety = computeHopkinsSymptomsAnxiety(forms[i].questions);
                                                break;
                                        case "Hopkins Symptom Checklist Part2":
                                                scores.depression = computeHopkinsSymptomsDepression(forms[i].questions);
                                                break;
                                }
                        }

                        scores.trauma = (scores.trauma + scores.dsm*16)/40;
                        scores.total = computeTotalScore(scores.anxiety, scores.depression);
                        return scores;

                }
        }

})

.factory("ResponseData", function($http) {

        var response_data = {};
        return {
                set_response_data: function(data) {
                        response_data = data;
                },
                get_response_data: function() {
                        console.log(response_data);
                        return response_data;
                },
                generatePDF: function(data, email) {
                        data.email = email;
                        console.log(data);
                        var promise = $http({
                                method: "POST",
                                url: "http://capstonespring2017.herokuapp.com/genPDF?email=" + email,
                                data: data
                        });
                        return promise;
                }
        };

})


.factory('Forms', function() {

        return {
                formObject: function(id, name, formData) {
                        return {
                                "id": parseInt(id),
                                "category": name,
                                "type": formData.type,
                                "dropdown": formData.dropdown,
                                "questions": formData.questions, 
                                "additional_comments": ""
                        }
                }
        }

})

.factory('Questions', function($http) {

        return {
                existing_patient_questions: function() {

                        var promise =  $http({
                                method: "GET",
                                url: "question_list.json"
                                        //url: "http://capstonespring2017.herokuapp.com/getQuestions"
                        }).then(function success(response) {
                                var questionData = {};
                                questionData.categories = Object.keys(response.data);
                                questionData.questions = response.data;
                                questionData.value = 6;
                                return questionData;
                        }, function failure(response) {
                                console.log("did not get data");
                        });

                        return promise;

                },

                new_patient_questions: function() {

                        var promise =  $http({
                                method: "GET",
                                url: "question_list2.json"
                                        //url: "http://capstonespring2017.herokuapp.com/getQuestions"
                        }).then(function success(response) {

                                var returnObj = {};
                                var categories = [];

                                // extract categories, and add "value" to each question
                                for (var i = 0; i < response.data.length; i++) {
                                        // i is form number
                                        categories.push(response.data[i].name);
                                        for (var j = 0; j < response.data[i].questions.length; j++) {
                                                // j is question number
                                                switch (response.data[i].type) {
                                                        case "bool":
                                                                response.data[i].questions[j].value = "N/A";
                                                                response.data[i].questions[j].score = 0;
                                                                break;
                                                        case "scale":
                                                                response.data[i].questions[j].value = "N/A";
                                                                response.data[i].questions[j].score = 0;
                                                                break;
                                                        case "paragraph":
                                                                response.data[i].questions[j].value = "";
                                                                break;
                                                }
                                                if (response.data[i].questions[j].dropdown) {
                                                        for (var k = 0; k < response.data[i].questions[j].dropdown.length; k++) {
                                                                switch (response.data[i].questions[j].dropdown[k].type) {
                                                                        case "bool":
                                                                                response.data[i].questions[j].dropdown[k].value = "N/A";
                                                                                response.data[i].questions[j].dropdown[k].score = 0;
                                                                                break;
                                                                        case "time":
                                                                                response.data[i].questions[j].dropdown[k].value = "";
                                                                                response.data[i].questions[j].dropdown[k].score = 0;
                                                                                break;
                                                                        case "numerical":
                                                                                response.data[i].questions[j].dropdown[k].value = 0;
                                                                                response.data[i].questions[j].dropdown[k].score = "";
                                                                                break;
                                                                }
                                                        }}
                                        }
                                }

                                returnObj.forms = response.data;
                                returnObj.categories = categories;

                                return returnObj;

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
