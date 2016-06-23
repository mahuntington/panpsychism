var express = require('express'), 
    router  = express.Router();

var User     = require('../models/users'),
    Bookmark = require('../models/bookmarks');


// set up index
router.get('/', function(req, res) {
	User.find(function(err, user) {
		res.json(user);
	});
});


// set up create
router.post('/', function(req, res) {
	User.create(req.body, function(err, user) {
		console.log(user);
		res.redirect('/users');
	});
});


module.exports = router;