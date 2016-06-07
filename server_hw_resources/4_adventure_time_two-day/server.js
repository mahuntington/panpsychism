var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    port           = 3000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

charactersController = require('./controllers/characters.js');

app.get('/', function(req, res) {
	res.redirect('/characters');
});

app.use('/characters', charactersController);

app.listen(port, function() {
	console.log('============================') 
	console.log('APP IS RUNNING ON PORT: ' + port);
	console.log('============================');
});
