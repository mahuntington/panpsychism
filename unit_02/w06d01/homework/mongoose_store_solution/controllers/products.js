var express = require('express');
var router = express.Router();
var Product = require('../models/products');

// INDEX
router.get('/', function(req, res) {
	Product.find(function(err, products) {
		// res.send(products);
		res.render('products/index.ejs', { data: products });
	});
});

router.get('/json', function(req, res) {
	Product.find(function(err, products) {
		res.send(products);
	});
});

// NEW
router.get('/new', function(req, res) {
	res.render('products/new.ejs');
})


// SHOW
router.get('/:id', function(req, res) {
	Product.findOne({ _id: req.params.id }, function(err, product) {
		res.render('products/show.ejs', { data: product });
	});
});

// EDIT
router.get('/:id/edit', function(req, res) {
		Product.findOne({ _id: req.params.id }, function(err, product) {
		res.render('products/edit.ejs', { data: product });
	});
})


// CREATE
router.post('/', function(req, res) {
	
	var newProduct = new Product(req.body);

	newProduct.save(function(err) {
		if (err) {
			console.log(err);
			res.send('Error saving ' + newProduct.id)
		} else {
			console.log("NEW PRODUCT CREATED! Id: " + newProduct.id);
			res.redirect('/products');
		}
	});
});


// UPDATE
router.put('/:id', function(req, res) {
	console.log('UPDATE ROUTE ACCESSED');
	Product.findOneAndUpdate( { _id: req.params.id }, req.body, function(err, product) {
		if (err) {
			console.log(err);
			res.send('Error updating ' + product.id);
		} else {
			console.log("PRODUCT " + product.id + " UPDATED!")
			res.redirect('/products/' + req.params.id);
		}
	});
});

// UPDATE BUY
router.put('/buy/:id', function(req, res) {
	console.log('BUY UPDATE ROUTE ACCESSED');
	Product.findOne({ _id: req.params.id}, function(err, product) {
		product.qty -= 1;
		product.save(function(err) {
			if (err) { 
				console.log(err) 
			} else {
				res.redirect('/products/' + req.params.id);
			}	
		});
	});
});



// DESTROY
router.delete('/:id', function(req, res) {
	console.log('DELETE ROUTE ACCESSED');
	Product.remove({ _id: req.params.id}, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('PRODUCT ' + req.params.id + ' DELETED')
		}
	});
	res.redirect('/products');
});


router.get('/seed/newproducts', function(req, res) {

	var newProducts = [
		{
			name: "Beans",
			description: "A small pile of beans. Buy more beans for a big pile of beans.",
	    img: "http://www.allbulkfoods.com/images/catalog/419240.jpg",
			price: 5,
			qty: 99
		}, {
			name: "Bones",
			description: "It's just a bag of bones.",
    	img: "http://bluelips.com/prod_images_large/bones1.jpg",
			price: 25,
			qty: 0
	  }, {
			name: "Bins",
			description: "A stack of colorful bins for your beans and bones.",
    	img: "http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg",
			price: 7000,
			qty: 1
	  }
	];

	Product.create(newProducts, function(err) {
			console.log("SEED: NEW PRODUCTS CREATED!");
		  res.redirect('/products');
	});

});


module.exports = router;
