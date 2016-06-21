var express = require('express'),
    router  = express.Router();

var User     = require('../models/users'),
    Location = require('../models/locations');


router.get('/', function(req, res) {
	User.find(function(err, users) {
		res.render('users/index.ejs', { users: users });
	});
});

router.get('/json', function(req, res) {
	User.find(function(err, user) {
		res.send(user);
	});
});

router.get('/:id/json', function(req, res) {
	User.findById(req.params.id, function(err, user) {
		res.send(user);
	});
});

router.get('/:id', function(req, res) {
	User.findById(req.params.id, function(err, user) {
		res.render('users/show.ejs', { user: user });
	});
});

router.post('/:id/newlocation', function(req, res) {
	User.findById(req.params.id, function(err, user) {
		var location = new Location(req.body);
		location.save(function(err, location) {
			user.locations.push(location);
			user.save(function(err) {
				res.redirect('/users/' + req.params.id);
			});			
		});
	});
});

router.post('/', function(req, res) {
	User.create(req.body, (function(err, user) {
		console.log('USER CREATED');
		res.redirect('/users/' + user.id);
	}));
});

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
		}
	});
});



module.exports = router;
