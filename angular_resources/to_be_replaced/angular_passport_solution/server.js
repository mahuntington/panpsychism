var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose       = require('mongoose'),
    passport       = require('passport'),
    session        = require('express-session'),
    port           = 3000 || process.env.PORT,
    app            = express();

mongoose.connect('mongodb://localhost/angular_auth_app');

// load passport config
require('./config/passport')(passport);

locationsController = require('./controllers/locationsController');
usersController     = require('./controllers/usersController');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ name: 'maps_auth_app', secret: 'Scheherezade' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use('/locations', locationsController);
app.use('/users', usersController);

// root redirects to users index
// app.get('/', function(req, res) {
// 	res.redirect('/users');
// });

app.listen(port, function() {
    console.log('=======================');
    console.log('Running on port ' + port);
    console.log('=======================');
});
