var express = require('express'),
    router  = express.Router();

var User      = require('../models/users'),
    Location  = require('../models/locations');

// locations index
router.get('/', isLoggedIn, function(req, res) {
    Location.find(function(err, locations) {
        res.render('locations/index.ejs', { locations: locations });
    });
});

// json for locations, fetched by ajax to display markers on map
router.get('/json', function(req, res) {
	Location.find(function(err, location) {
		res.send(location);
	});
});

// middleware to check login status
// used in index route
function isLoggedIn(req, res, next) {
  console.log('isLoggedIn middleware');
  if (req.isAuthenticated()) {
    return next(); 
  } else {
    res.redirect('/users');
  }
}

module.exports = router;
