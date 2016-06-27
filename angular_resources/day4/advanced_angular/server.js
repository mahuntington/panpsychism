var express = require('express'),
    app     = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/angular_techniques_app');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

var usersController = require('./controllers/usersController');

app.use('/users', usersController);

app.listen(3000);
