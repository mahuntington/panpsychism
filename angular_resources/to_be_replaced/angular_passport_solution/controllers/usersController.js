var express  = require('express'),
		passport = require('passport'),
    router   = express.Router();

var User     = require('../models/users'),
    Location = require('../models/locations');

// user index
router.get('/', function(req, res) {
	res.locals.login = req.isAuthenticated();
	User.find(function(err, users) {
		res.render('users/index.ejs', { users: users });
	});
});

router.get('/getuser', function(req, res) {
	if (req.isAuthenticated()) {
		res.send(req.user);
	} else {
		res.send('0');
	} 
});

// json for all users (for testing)
router.get('/json', function(req, res) {
	User.find(function(err, users) {
		res.send(users);
	});
});

// json for specific user, fetched by ajax to display markers on map
router.get('/:id/json', function(req, res) {
	User.findById(req.params.id, function(err, user) {
		res.send(user);
	});
});

// logout of session
router.get('/logout', function(req, res) {
    req.logout();
    res.send('0');
});

// show page -- can only be viewed if logged in
router.get('/:id', isLoggedIn, function(req, res) {
		// for user control flow within template (enables editing only on the user's own page)
		req.params.id == req.user.id ? res.locals.usertrue = true : res.locals.usertrue = false;
		User.findById(req.params.id, function(err, user) {
			res.render('users/show.ejs', { user: user });
		});
});

// saves a new location to the Location model and the User's locations list
router.post('/:id/newlocation', function(req, res) {
	User.findById(req.params.id, function(err, user) {
		var location = new Location(req.body);
		location.save(function(err, location) {
			user.locations.push(location);
			user.save(function(err, user) {
				res.redirect('/users/' + req.params.id);
			});			
		});
	});
});

// user create -- signup
router.post('/', passport.authenticate('local-signup', { 
	failureRedirect: '/boatboy' }), function(req, res) {
    //success redirect goes to show page
    res.send(req.user);
});

// login
router.post('/login', passport.authenticate('local-login', { 
	failureRedirect: '/boatboy' }), function(req, res) {
    // success redirect goes to show page
    res.send(req.user);
});



// delete 
router.delete('/:id', function(req, res) {
	console.log('DELETE ROUTE ACCESSED');
	User.findById(req.params.id, function(err, user) {
		if (user.locations.length == 0) {
			user.remove(function(err) {
				res.redirect('/users');
			});
		} else {
			user.locations.forEach(function(location) {
				Location.findOneAndRemove({ _id: location.id }, function(err) {
					if (err) console.log(err);
				});
			});
			user.remove(function(err) {
				res.redirect('/users');
			});
		} // end if
	}); // end User find
});

// middleware to check login status
// used in show route
function isLoggedIn(req, res, next) {
	console.log('isLoggedIn middleware');
  if (req.isAuthenticated()) {
  	return next(); 
  } else {
  	res.redirect('/users');
  }
}

module.exports = router;
