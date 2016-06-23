
// ajax request to this app's /json/instructors route
// gets data and loads it into callback
// you can do whatever you want with the data
// inside the callback

$.ajax('/json/instructors').done(function(result) {
	console.log(result);
});
