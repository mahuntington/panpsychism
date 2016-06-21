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

		addMarkers(map);

	} // end initialize

	// Display the map
	google.maps.event.addDomListener(window, 'load', initialize);

}); // end window onload


var addMarkers = function(map) {

	//ajax call to get locations data from 'locations/json' route
	$.ajax('/locations/json')
	 .done(function(result) {
			// add location markers
			for (var i=0; i < result.length; i++) {
				marker = new google.maps.Marker ({
				    map: map,
				    icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
				    position: { lat: result[i].lat, lng: result[i].lng },
				    title: result[i].name
				});
		  };
		});
} // end addMarkers
