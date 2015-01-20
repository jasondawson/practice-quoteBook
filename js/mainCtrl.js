var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {

var clearInputs = function() {
	$scope.remQuote = '';
	$scope.newQuote.text = '';
	$scope.newQuote.author = '';
	$scope.filt = '';

}

	$scope.quotes = dataService.getData();
	$scope.newQuote = {};
	$scope.removeQuote = function(str) {
		dataService.removeData(str);
		clearInputs();
	}

	$scope.addData = function(newQuote) {
		dataService.addData(newQuote);
		clearInputs();
	}

	$scope.toggle = function(str) {
		$scope.focus = str;
		clearInputs();
	}

});