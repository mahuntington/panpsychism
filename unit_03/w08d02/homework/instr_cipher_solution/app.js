console.log('app.js');

var app = angular.module('cipher', []);


app.controller('MainController', [function() {

	this.message = "hi"

	this.encrypt = function() {
		this.encrypted = caesarShift(this.original, 12)
	}

	this.decrypt = function() {
		this.decrypted = caesarShift(this.input, -12)
	}

}]);