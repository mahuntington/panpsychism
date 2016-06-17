console.log('app.js');

var app = angular.module('datingApp', []);

app.controller('MainController', ['$http', function($http) {

	var self = this;

	// this.formdata = {};

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

	this.getUsers = function() {

		self.usersEven = [];
		self.usersOdd = [];

		$http({
			method: 'GET',
			url: '/users'
		}).then(function(results) {
			console.log(results.data);

			var shuffled = shuffle(results.data);

			for (var i=0; i < shuffled.length; i++) {
				if (i % 2 == 0) {
					self.usersEven.push(shuffled[i]);
				} else {
					self.usersOdd.push(shuffled[i]);
				}
			};

		});
	};

	this.processForm = function() {
		console.log('processform function running');
		console.log('form data: ', this.formdata);

		$http({
			method: 'POST',
			url: '/users',
			data: this.formdata
		}).then(function(result) {
			console.log('data back from the server: ', result);
			self.getUsers();
		});
	};




















}]);