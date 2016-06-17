var express = require('express');

var router = express.Router();

var Characters = require('../models/characters.js');

// INDEX
router.get('/', function(req, res) {
	res.render('index.ejs', { data: Characters });
});

// NEW
router.get('/new', function(req, res) {
	res.render('new.ejs');
});

// SHOW
router.get('/:id', function(req, res) {
	for (var i=0; i < Characters.length; i++) {
		if (Characters[i].id == req.params.id) {
			res.render('show.ejs', { data: Characters[i] });
		}
	}
});

// EDIT
router.get('/:id/edit', function(req, res) {
	for (var i=0; i < Characters.length; i++) {
		if (Characters[i].id == req.params.id) {
			res.render('edit.ejs', { data: Characters[i] });
		}
	}
});

// CREATE
router.post('/', function(req, res) {

	// code for assigning a new unique id
	var max = -Infinity;
	for( var i=0; i < Characters.length; i++) {
	    if( Characters[i].id > max) { 
	    	max = Characters[i].id 
	    }
	}
	req.body.id = max + 1;
	// id assigned!

	Characters.push(req.body);
	res.redirect('/characters');
});

// UPDATE
router.put('/:id', function(req, res) {
	req.body.id = parseInt(req.params.id);
	for (var i=0; i < Characters.length; i++) {
		if (Characters[i].id == req.params.id) {
			Characters[i] = req.body;
		}
	}

	res.redirect('/characters');
});

// DELETE
router.delete('/:id', function(req, res) {
	for (var i=0; i < Characters.length; i++) {
		if (Characters[i].id == req.params.id) {
			Characters.splice(i, 1);
		}
	}
	console.log(req.params.id);
	res.redirect('/characters');
});

module.exports = router;
