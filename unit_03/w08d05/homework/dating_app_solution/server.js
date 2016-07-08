var express = require('express'),
    app     = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/dating_app');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

var usersController = require('./controllers/usersController');

app.use('/users', usersController);

app.get('*', function(req, res){
  res.redirect('/');
});

app.listen(5555);
