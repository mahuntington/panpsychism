var express = require('express'),
    router = express.Router();

var User = require('../models/users');


router.get('/', function(req, res) {
	User.find(function(err, user) {
		res.send(user);
	});
});

router.get('/:id', function(req, res) {
	User.findById(req.params.id, function(err, user) {
		res.send(user);
	});
});


router.post('/', function(req, res) {
	User.create(req.body, function(err, user) {
		res.send(user);
	});
});

router.put('/:id', function(req, res) {
	User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
		res.send(user);
	});
});


router.get('/seed', function(req, res) {

	var users = [
		{ name: 'Ryan Gosling', age: 35, gender: 'm', img: 'http://coolspotters.com/files/photos/591533/ryan-gosling-large.jpg?1357449177'},
		{ name: 'Hypatia of Alexandria', age: 1700, gender: 'f', img: 'http://static1.squarespace.com/static/53e031f1e4b088c3aac80e47/t/5636ebf1e4b0683b6c56cb43/1446440030277/hypatia.jpg'},
		{ name: "Hogan", age: 40, gender: 'm', img: 'http://myfivebest.com/wp-content/uploads/2010/10/crime_crane.jpg'},
		{ name: 'Lumpy Space Princess', age: 29, gender: 'f', img: 'http://t14.deviantart.net/PKE6w6_Z5VgPYF2_eiG8FOL2tEU=/fit-in/150x150/filters:no_upscale():origin()/pre14/9e4c/th/pre/f/2012/235/a/b/lumpy_space_princess_by_pikurosonai00-d5c72wn.png'},
		{ name: 'Idris Elba', age: 43, gender: 'm', img: 'http://www.ramascreen.com/wp-content/uploads/2015/01/Idris-Elba-Luther-150x150.jpg'},
		{ name: 'The Trash Heap of Fraggle Rock', age: 1000, gender: 'f', img: 'http://www.toughpigs.com/wp-content/uploads/2009/12/trasheap-150x150.jpg'},
		{ name: 'Homeless guy', age: 60, gender: 'm', img: 'http://www.viralviralvideos.com/wp-content/uploads/2015/07/homeless-man-who-beautifully-pla-150x150.jpg'},
		{ name: 'Raisin', age: 20, gender: 'f', img: 'http://cdn.lifeinthefastlane.com/wp-content/uploads/2010/09/raisin.jpg'}
	];

	User.create(users, function(err, users) {
		res.redirect('/');
	});

});

module.exports = router;