var express = require('express');
var router = express.Router();

var User = require('../models/users');
var Product = require('../models/products');

router.get('/', function(req, res) {
	User.find(function(err, users) {
		res.send(users);
	});
});


router.get('/:id/json', function(req, res) {
	User.findOne({ _id: req.params.id }, function(err, user) {
		res.send(user);
	});
});


router.get('/:id/cart', function(req, res) {
	User.findOne({ _id: req.params.id }, function(err, user) {
		res.render('users/cart.ejs', { data: user })
		// res.send(user.shopping_cart);
	});
});

router.put('/:id/addtocart', function(req, res) {
	User.findOne({ _id: req.params.id }, function(err, user) {
		Product.findOne({ _id: req.body.product_id }, function(err, product) {
			product.qty = 1; 
			user.shopping_cart.push(product);
			user.save(function(err) {
				res.redirect('/users/' + req.params.id + '/cart');
			});	
		});
	});
});

router.get('/:id/emptycart', function(req, res) {
	User.findOne({ _id: req.params.id }, function(err, user) {
		user.shopping_cart = [];
		user.save(function(err, user) {
			res.redirect('/users/' + req.params.id + '/cart');
		});
	});
});


router.get('/seed/newuser', function(req, res) {

	var newUser = {
		username: "Rex",
		password: "Rex",
		email: "Rex"
	}

	User.create(newUser, function(err) {
		if (err) { 
			console.log(err) 
		} else { 
			console.log('new user created') 
		}
		res.redirect('/users');
	});

});

module.exports = router;