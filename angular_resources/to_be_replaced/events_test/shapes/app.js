console.log('app.js');

var app = angular.module('events', []);


app.controller('MainCtrl', ['$scope', function($scope) {

}]);

app.controller('Level1', ['$scope', function($scope) {
	var self = this;
	this.color = ""

	$scope.$on('lvl2change', function(event, data) {
		console.log(data);
		self.color = data;
	});

	// this.selectcolor = function() {
	// 	$scope.$emit('lvl1change', self.color);
	// 	console.log('clicked lvl1');
	// }

}]);

app.controller('Level2', ['$scope', function($scope) {
	var self = this;
	this.color = "cornflowerblue";
	
	this.selectcolor = function() {
		$scope.$emit('lvl2change', self.color);
		console.log('clicked lvl2');
	}

}]);



