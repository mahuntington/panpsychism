// dependencies
var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose       = require('mongoose');

var app = express();
var port = process.env.PORT || 3000;


// db connect
mongoose.connect('mongodb://localhost/no_name');

usersController = require('./controllers/usersController');
bookmarksController = require('./controllers/bookmarksController');

// middleware
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', usersController);
app.use('/bookmarks', bookmarksController);

app.get('/', function(req, res) {
	res.redirect('/users');
});


// listener
app.listen(port, function() {
	console.log('=======================');
    console.log('No Name App');
    console.log('Running on port ' + port);
    console.log('=======================');
});
