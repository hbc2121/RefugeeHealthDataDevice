angular.module('starter.controllers', ["ngCordova"])

.controller('VisitConfirmationCtrl', function($scope, $state, $sce, $stateParams, $cordovaFile, Questions, ResponseData) {

	$scope.submit = function() {
		ResponseData.generatePDF(ResponseData.get_response_data()).then(function(data) {
			$cordovaFile.writeFile(cordova.file.tempDirectory, "data.pdf", "brett is cuter than danielle zelin", true).then(function(result) {
                                console.log("success!");
			}, function(err) {
                                console.log(err);
			}); 
			//if (ionic.Platform.isAndroid()) {
			//        if (link_type !== undefined && link_type !== null) {
			//                if (link_type.toLowerCase() !== 'html') {
			//                        url = 'https://docs.google.com/viewer?url=' + encodeURIComponent(url);
			//                }
			//        }
			//}
			//var ref = window.open(url, '_blank', 'location=no');
		});
		//$state.transitionTo('tab.disclaimer');
	}

	// two decimal places
	for (key in $stateParams) {
		$stateParams[key] = Number($stateParams[key]).toFixed(2);
	}

	$scope.scores = $stateParams;

});
