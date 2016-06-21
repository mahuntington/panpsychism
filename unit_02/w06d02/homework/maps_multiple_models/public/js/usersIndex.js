$(function() {

	// Google Map Settings
	var initialize = function () {
		var map = new google.maps.Map(document.getElementById('map-canvas'), {
		  zoom: 12,
		  minZoom: 10,
		  streetViewControl: false,
		  mapTypeControl: false,
		  center: new google.maps.LatLng(40.696829, -73.935232),
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		});

	} // end initialize

	// DISPLAY THE MAP
	google.maps.event.addDomListener(window, 'load', initialize);

	// Event listener for drop-down menu .change
	// redirects to show page
  // >>

});

