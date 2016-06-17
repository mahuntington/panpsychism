console.log('app.js');

var app = angular.module('angularTechniques', []);


app.controller('RyanController', ['$http', '$scope', function($http, $scope) {

	var self = this;

	this.getInfo = function() {
		$http({ method: 'GET', url: '/users' })
		     .then(function(result) {
		     		self.user = result.data[0];
		     		console.log(self.user);

		     		$scope.$broadcast('fromParent', self.user);


		     });
	}

	$scope.$on('fromChild', function(event, data) {
		console.log(data);
		self.message = data
	});

}]);


app.controller('HypatiaController', ['$http', '$scope', function($http, $scope) {

	var self = this;

	this.getInfo = function() {
		$http({ method: 'GET', url: '/users' })
		     .then(function(result) {
		     		self.user = result.data[1];
		     		console.log(self.user);

		     		$scope.$broadcast('fromParent', self.user);

		     });
	};

	$scope.$on('fromChild', function(event, data) {
		console.log('data from Child: ', data);
		self.message = data
	});


}]);


app.controller('InfoController', ['$scope', function($scope) {

	var self = this;

	this.sendMessage = function() {
		console.log('sendMessage function');
		$scope.$emit('fromChild', { message: "Even flow, thoughts arrive like butterflies"})
	}

	$scope.$on('fromParent', function(event, data) {
		self.information = data;
	});

}]);


app.controller('formController', ['$scope', '$http', function($scope, $http){
  this.processForm = function() {

  		console.log('submit clicked');

  		var formdata = $scope.$parent.info.information
			var id = formdata._id;


			$http({ method: 'PUT', url: '/users/' + id, data: formdata})
			     .then(function(result) {
			     console.log(result);
			});

  }
}]);


app.directive('formsender', function(){
    return {
        restrict: 'E',
        templateUrl: 'form.html',
        controller: 'formController',
        controllerAs: 'form'
    };
});






