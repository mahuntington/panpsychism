var express = require('express'),
    router = express.Router();

var User = require('../models/users');

router.get('/', function(req, res) {
	User.find(function(err, user) {
		res.send(user);
	});
});

router.put('/:id', function(req, res) {
	console.log('put route data: ', req.body);
	User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
		res.send(user);
	});
});


router.get('/seed', function(req, res) {

	var users = [
		{ name: 'Ryan Gosling', age: 35, gender: 'm', img: 'http://coolspotters.com/files/photos/591533/ryan-gosling-large.jpg?1357449177'},
		{ name: 'Hypatia of Alexandria', age: 1700, gender: 'f', img: 'http://static1.squarespace.com/static/53e031f1e4b088c3aac80e47/t/5636ebf1e4b0683b6c56cb43/1446440030277/hypatia.jpg'}
	];

	User.create(users, function(err, users) {
		res.redirect('/');
	});

});

module.exports = router;