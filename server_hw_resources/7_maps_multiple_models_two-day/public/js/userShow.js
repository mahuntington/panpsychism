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

		// Add new markers
		addMarkers(map);

	} // end initialize

	// Display the map
	google.maps.event.addDomListener(window, 'load', initialize);

}); // end window onload


var addMarkers = function(map) {

	// add markers biz

} // end addMarkers
