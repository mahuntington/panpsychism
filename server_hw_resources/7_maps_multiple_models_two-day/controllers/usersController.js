var express = require('express'),
    router  = express.Router();


// INDEX
router.get('/', function(req, res) {
	res.render('users/index.ejs')
});

// SHOW
router.get('/:id', function(req, res) {
	res.render('users/show.ejs');
});


module.exports = router;
