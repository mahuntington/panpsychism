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

	// DISPLAY THE MAP
	google.maps.event.addDomListener(window, 'load', initialize);

});

var addMarkers = function(map) {

	var userid = $('#user_id').text();

	//ajax call to get location data
	$.ajax('/users/' + userid + '/json').
		done(function(result) {
			// add location markers
			for (var i=0; i < result.locations.length; i++) {
				marker = new google.maps.Marker ({
				    map: map,
				    icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
				    position: { lat: result.locations[i].lat, lng: result.locations[i].lng },
				    title: result.locations[i].name
				});				
		  };
		});
} // end addMarkers
