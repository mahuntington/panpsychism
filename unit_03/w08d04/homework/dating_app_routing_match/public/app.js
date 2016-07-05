var app = angular.module('date', ['ngRoute']);

app.controller('MainController', ['$http', '$scope', function($http, $scope) {

	var self = this;

	// gets all the users for display
	this.getUsers = function() {
		console.log('getUsers');

		$http({
			url: '/users',
			method: 'GET'
		}).then(function(response) {

			// shuffles the users into arrays of 'even' and 'odd'
			// in the index.html, odds will be populated on the left side of the page
			// in the index.html, evens will go to the right side of the page
			self.usersEven = [];
			self.usersOdd = [];

			var shuffledData = shuffle(response.data);
			
			for (var i=0; i < response.data.length; i++) {
				if (i % 2 == 0) {
					self.usersEven.push(shuffledData[i]);
				} else {
					self.usersOdd.push(shuffledData[i]);
				}
			} // end for loop
		}); // end ajax
	}; // end getUsers

	// invoke getUsers on page load
	this.getUsers();

	// on ng-mouseover in left box, this function will display the moused-over user in the match box 
	this.displayImageL = function(img) {
		$scope.$broadcast('leftImage', img);
	} // end displayImageL

	// on ng-mouseover in right box, this function will display the moused-over user in the match box 
	this.displayImageR = function(img) {
		$scope.$broadcast('rightImage', img);
	} // end displayImageR

	// when the 'add a dater' form is submitted, all the ng-models in the form are placed into this.formdata.
	// this.formdata is sent in the body of a POST request to create a new dater.
	this.processForm = function() {
		console.log('processForm');
		console.log('Formdata: ', this.formdata);

		$http({
			method: 'POST',
			url: '/users',
			data: this.formdata
		}).then(function(result) {
			self.getUsers();
		});
	} // end processForm

}]); // end MainController




app.controller('MatchController', ['$scope', function($scope) {
	console.log('match controller');

	var self = this;

	// default images for the Match Box
	this.limage="http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-md.png";
	this.rimage="http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-md.png";

	$scope.$on('leftImage', function(event, data) {
		console.log(data);
		self.left = true;
		self.limage = data;
	});

	$scope.$on('rightImage', function(event, data) {
		console.log(data);
		self.right = true;
		self.rimage = data;
	});

	// when the 'click to match' button is pressed, this function will revert the display to default
	this.match = function() {
		this.limage="http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-md.png";
		this.rimage="http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-md.png";
		this.left = false;
		this.right = false;
		console.log('match');
	} // end match

}]);


app.controller('EditController', [function() {
	console.log('edit controller');
}]);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode({ enabled: true });

	$routeProvider.when('/edit/:id', {
		templateUrl: 'partials/edit.html',
		controller: 'EditController',
		controllerAs: 'ctrl'
	});

	$routeProvider.when('/', {
		templateUrl: 'partials/match.html',
		controller: 'MatchController',
		controllerAs: 'ctrl'
	});

}]); // end Config


function shuffle(array) {
    var counter = array.length;
    while (counter > 0) {
        var index = Math.floor(Math.random() * counter);
        counter--;
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}


