var express = require('express'),
    router  = express.Router();

var User      = require('../models/users'),
    Location  = require('../models/locations');


router.get('/', function(req, res) {
	Location.find(function(err, locations) {
		res.render('locations/index.ejs', { locations: locations });
	});
});

router.get('/json', function(req, res) {
	Location.find(function(err, location) {
		res.send(location);
	});
});

module.exports = router;
