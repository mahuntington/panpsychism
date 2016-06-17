console.log('app.js');

var app = angular.module('worldbank', []);

app.controller('mainController', ['$http', function($http) {
	// freeze the scope: self now refers to this level of scope
	self = this;

	// creates array for countries to be added for display
	this.countryList = [];

	// http/ajax call to get length of records array and list of countries to show on the page
	$http({ method: 'GET', url: '/json'}).then(function(response) {
		// set up number of records
		self.numberOfRecords = response.data.length;
		
		// set up countryList
		var allCountries = {};
		// make list of unique countries by adding them as keys/values in an object where keys are by definition unique
		for (var i=0; i < response.data.length; i++) {
			allCountries[response.data[i].countryname] = response.data[i].countryname;
		};
		// take list of unique keys and push them into countryList array
		for (var key in allCountries) {
			self.countryList.push(allCountries[key]);
		}
	}); // end http

  this.getOne = function(recordNum){
  	// boolean for ng-hide and ng-show on page
  	this.showWhich = false;

  	// http/ajax call to get a record by index
    $http({
      method: 'GET',
      url: '/json/' + recordNum
    }).then(
      function(response) {
        //success callback, save data to scoped variables
        self.countryname = response.data.countryname;
        self.projectabstract = response.data.project_abstract;
        self.projectname = response.data.project_name;
        self.total = response.data.totalcommamt;
    }); // end http
  }; // end getOne

  this.getByRegion = function(country) {
  	// boolean for ng-hide and ng-show on page
  	this.showWhich = true;

  	// creates and also empties infoList array-- to be populated with objects to display
  	this.infoList = [];

  	//http/ajax call to get all countries by name
  	$http({
  		method: 'GET',
  		url: '/json'
  	}).then(function(response) {

  		// loops over response and pushes into infoList array all the objects that match the country name
  		for (var i=0; i < response.data.length; i++) {
  			if (response.data[i].countryname == country) {
  				self.infoList.push({
        		countryname: response.data[i].countryname,
        	  projectabstract: response.data[i].project_abstract,
            projectname: response.data[i].project_name,
            total: response.data[i].totalcommamt
  				}); // end push
  			}; // end if
  		}; // end for loop
  	}); // end http
  }; // end getByRegion

}]); // end mainController



