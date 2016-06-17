console.log('app.js');

var app = angular.module('AuthApp', []);

app.controller('MainController', ['$http', function($http) {


	self = this;

	this.user = {}

	this.message = "test massage";


	var getUser = function() {
		$http({ url: '/users/getuser', method: 'GET'})
		.then(function(result) {
			console.log(result.data);	
			if (result.data == '0') {
				self.user.username = "not logged in"
			}	else {
				self.user = result.data
			}
		});
	}

	getUser();

	this.signup = function() {
		console.log('clicked');
		console.log('formData: ', this.signupdata);
		$http({ url: '/users', method: 'POST', data: this.signupdata })
		.then(function(result) {
			console.log('New User back from server: ', result.data);
			self.user = result.data;
		});
	} // end signup

	this.login = function() {
		console.log('clicked');
		console.log('formData: ', this.logindata);
		$http({ url: '/users/login', method: 'POST', data: this.logindata })
		.then(function(result) {
			console.log('Logged in User back from server: ', result.data);
			self.user = result.data;
		});
	} // end login

	this.logout = function() {
		console.log('clocked logout');
		$http({ url: '/users/logout', method: 'GET'})
		.then(function(result) {
			console.log('logout result: ', result.data);
			self.user = {}
			getUser();
		});
	}

}]);