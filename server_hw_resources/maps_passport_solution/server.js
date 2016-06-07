var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose       = require('mongoose'),
    passport       = require('passport'),
    session        = require('express-session'),
    port           = 3000 || process.env.PORT,
    app            = express();

mongoose.connect('mongodb://localhost/maps_auth_app');

// load passport config
require('./config/passport')(passport);

locationsController = require('./controllers/locationsController');
usersController     = require('./controllers/usersController');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ name: 'maps_auth_app', secret: 'conventional wisdom' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// Example middleware for template control flow via 'login' variable. 
// I'm using res.locals.login = req.isAuthenticated() only in the users index controller for now,
// for use only in users/index.ejs view. I've commented it here in case I ever wanted to make it 
// available to other pages or make it app-wide in future.

// app.use('/', function(req, res, next) {
//   res.locals.login = req.isAuthenticated();
//   next();
// });

app.use('/locations', locationsController);
app.use('/users', usersController);

// root redirects to users index
app.get('/', function(req, res) {
	res.redirect('/users');
});

app.listen(port, function() {
    console.log('=======================');
    console.log('Running on port ' + port);
    console.log('=======================');
});
