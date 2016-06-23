var express = require('express'),
    router = express.Router();

var Bookmark = require('../models/bookmarks'),
    User     = require('../models/users');

router.get('/', function(req, res) {
	Bookmark.find(function(err, bookmarks) {
		res.json(bookmarks);
	});
});

router.post('/:user_id', function(req, res) {
	User.findById(req.params.user_id, function(err, user) {
		Bookmark.create(req.body, function(err, bookmark) {
			user.bookmarks.push(bookmark);
			user.save(function(err) {
				res.redirect('/bookmarks');
			});
		});
	});
});


router.put('/:id/:user_id', function(req, res) {
	Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, bookmark) {
		User.findById(req.params.user_id, function(err, user) {
			for (var i=0; i < user.bookmarks.length; i++) {
				if (user.bookmarks[i].id == req.params.id) {
					user.bookmarks[i] = { _id: req.params.id, name: req.body.name, url: req.body.url }
					user.save(function(err) {
						res.redirect('/bookmarks');
					});
				}
			}
		});
	});
});


module.exports = router;