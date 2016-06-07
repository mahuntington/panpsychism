var express    = require('express'),
    router     = express.Router(),
    Characters = require('../models/characters.js');

// INDEX
router.get('/', function(req, res) {
	res.render('index.ejs', { data: Characters });
});

// NEW


// SHOW
router.get('/:id', function(req, res) {
	for (var i=0; i < Characters.length; i++) {
		if (Characters[i].id == req.params.id) {
			res.render('show.ejs', { data: Characters[i] });
		}
	}
});

// EDIT


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
	//^^ id assigned!

	// more stuff needed here
});


// UPDATE
// remember to give req.body.id a value so that
// the character will be saved with an id


// DELETE



module.exports = router;
