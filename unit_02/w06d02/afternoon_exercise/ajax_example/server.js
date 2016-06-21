// Simple AJAX example

var express = require('express'),
    app     = express();

app.use(express.static('public'));

// serves up json data
app.get('/json/instructors', function(req, res) {
	var json = [
		{ name: 'Thom', exists: false },
		{ name: 'Matt', exists: false },
		{ name: 'Colin', exists: false },
		{ name: 'Kristyn', exists: false }
	];
	res.send(json);
});

app.listen(3000);
