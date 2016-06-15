var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000);

var vampires = require('./models/vampires.js');



app.get('/vampires', function(req, res) {
	res.render('index.ejs', { vampires: vampires });
});

app.get('/vampires/new', function(req, res) {
	res.render('new.ejs');
});


app.get('/vampires/:id', function(req, res) {
	res.render('show.ejs', { vampire: vampires[req.params.id] } );
});


app.post('/vampires', function(req, res) {
	vampires.push(req.body);
	res.redirect('/vampires');
});
