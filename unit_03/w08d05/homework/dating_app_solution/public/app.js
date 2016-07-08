var app = angular.module('date', ['ngRoute']);

app.controller('MainController', ['$http', '$scope', function($http, $scope) {

	var self = this;

	// gets all the users for display
	this.getUsers = function() {
		console.log('getUsers');

		// default images for the Match Box
		this.limage="http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-md.png";
		this.rimage="http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-md.png";

		this.matched = false;

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
		this.left = true;
		this.limage = img;
	} // end displayImageL

	// on ng-mouseover in right box, this function will display the moused-over user in the match box 
	this.displayImageR = function(img) {
		this.right = true;
		this.rimage = img;
	} // end displayImageR

	this.match = function() {
		this.left = false;
		this.right = false;
		this.matched = true;
		if (Math.random() > 0.5) {
			this.status = true;
		} else {
			this.status = false;
		}
	} // end match

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
			self.formdata = {};
			self.getUsers();
		});
	} // end processForm

}]); // end MainController



app.controller('EditController', ['$http', '$routeParams', function($http, $routeParams) {

	console.log('edit controller');

	var self = this;
	this.formdata = {};

	$http({
		url: '/users/' + $routeParams.id,
		method: 'GET'
	}).then(function(response) {
		self.user = response.data;

		self.formdata.name = response.data.name,
		self.formdata.age = response.data.age,
		self.formdata.img = response.data.img,
		self.formdata.gender = response.data.gender

	});


	this.processForm = function() {
		console.log('EDIT processForm');
		console.log('Formdata: ', this.formdata);

		$http({
			method: 'PUT',
			url: '/users/' + $routeParams.id,
			data: this.formdata
		}).then(function(result) {
			console.log(result.data);
			window.location.pathname = "/";
		});
	} // end processForm

	this.delete = function() {
		$http({
			method: 'DELETE',
			url: '/users/' + $routeParams.id
		}).then(function() {
			window.location.pathname = "/";
		})
	}

}]);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode({ enabled: true });

	$routeProvider.when('/edit/:id', {
		templateUrl: 'partials/edit.html',
		controller: 'EditController',
		controllerAs: 'ctrl'
	});

	$routeProvider.when('/', {
		templateUrl: 'partials/match.html'
	});

	$routeProvider.otherwise({
    	redirectTo: '/'
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


