console.log('app2.js');

var app = angular.module('cipher', []);


app.controller('MainController', ['$scope', function($scope) {

	$scope.$on('leftmessage', function(event, data) {
		$scope.$broadcast('topmessage', data);
	});

	$scope.$on('leftunmessage', function(event, data) {
		$scope.$broadcast('topunmessage', data);
	});

}]);


app.controller('LeftController', ['$scope', function($scope) {

	var self = this;

	this.transferMessage = function() {
		$scope.$emit('leftmessage', self.input)
	}

}]);


app.controller('RightController', ['$scope', function($scope) {

	var self = this;

	$scope.$on('topmessage', function(event, data) {
		self.original = data;
		self.hashed = caesarShift(data, 12);
	})

}]);


app.controller('LeftUnController', ['$scope', function($scope) {

	var self = this;

	this.transferMessage = function() {
		$scope.$emit('leftunmessage', self.input);
	}

}]);


app.controller('RightUnController', ['$scope', function($scope) {

	var self = this;

	$scope.$on('topunmessage', function(event, data) {
		self.original = data;
		self.hashed = caesarShift(data, -12);
	})

}]);
