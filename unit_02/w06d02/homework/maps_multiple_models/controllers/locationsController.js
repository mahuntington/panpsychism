var express = require('express'),
    router  = express.Router();


// INDEX
router.get('/', function(req, res) {
	res.render('locations/index.ejs');
});


module.exports = router;
