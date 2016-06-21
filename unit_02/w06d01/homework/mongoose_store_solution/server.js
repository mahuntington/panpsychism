var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var app = express();
var port = 3000 || process.env.port;

mongoose.connect('mongodb://localhost/mongoose_store');

var productsController = require('./controllers/products.js');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use('/products', productsController);

app.get('/', function(req, res) {
	res.redirect('/products');
})

app.listen(port, function() {
	console.log("===========================");
	console.log("APP RUNNING ON PORT: ", port);
	console.log("===========================");
});


