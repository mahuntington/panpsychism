var app = angular.module('date', []);

app.controller('MainController', ['$http', function($http) {

	var self = this;

	this.limage="http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-md.png";
	this.rimage="http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-md.png";

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
		console.log('getUsers');

		$http({
			url: '/users',
			method: 'GET'
		}).then(function(response) {
			self.usersEven = [];
			self.usersOdd = [];
			var shuffledData = shuffle(response.data);
			
			for (var i=0; i < response.data.length; i++) {
				if (i % 2 == 0) {
					self.usersEven.push(shuffledData[i]);
				} else {
					self.usersOdd.push(shuffledData[i]);
				}
			}
		});
	};

	this.getUsers();

	this.match = function() {
		this.limage="http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-md.png";
		this.rimage="http://www.clker.com/cliparts/F/g/8/N/k/X/black-question-mark-square-icon-md.png";
		this.left = false;
		this.right = false;
		console.log('match');
	}

	this.displayImageL = function(img) {
		this.limage = img;
		this.left = true;
	}

	this.displayImageR = function(img) {
		this.rimage = img;
		this.right = true;
	}

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

	}

}]);


