![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: Mongoose Store<br>
Type: Homework<br>
Duration: Two days <br>
Creator: Thom Page <br>
Course: WDIr-Panthalassa<br>
Competencies: Full CRUD in Express with Mongoose <br>

---


# MONGOOSE STORE

Make a product inventory manager with full CRUD using Mongoose.


## APP

###Index page
Your app should have an index page where
 
- all the products are displayed
- the images link to the product's **show** page
- and there should be a link to add a new product.

![index](http://i.imgur.com/CRJd6Hg.png)

###Show page
Your show page should display a product with 

- a link back to the products
- a link to edit the product (goes to the edit page)
- a delete button that deletes
- and the number of items remaining in stock.

There will be a BUY button. The BUY button will reduce the number of items in stock by 1 each time it's pressed.

![show](http://i.imgur.com/sp9DGtd.png)
![bins](http://i.imgur.com/EADp0We.png)

If the quantity of your item is zero, the show page should say 'OUT OF STOCK' instead of saying how many are remaining. (Hint: conditionals in `ejs`). On the edit page, make sure you can set the quantity to zero if you want so that you can test if this is working.

The BUY button should also not be rendered if the quantity of the item is zero.

![no-show](http://i.imgur.com/5FZKyly.png)

###Edit page and New page
These views should render forms and submit to the appropriate routes.

###Redirects:
- The *create* route should redirect to the index
- The *delete* route should redirect to the index
- The *update* route will redirect back to the product's **show** page.

- For the **Primary Bonus** the BUY button will go to a route that redirects back to the product's **show** page
	
# DIRECTIONS

- Set up Express with MVC architecture with the appropriate folders for models, views, and controllers.

- You will need the seven RESTful routes to start. Test that they are accessible with Postman or cURL. Don't worry about what the BUY button does or where it goes just yet. Just set up your regular RESTful stuff.

- You will need to make a Mongoose Schema in a `products.js` file for your products. The schema should have:

```
  	name: String,
	description: String,
	img: String,
	price: Number,
	qty: Number
```
- Make sure you connect to your Mongo server in server.js

```
mongoose.connect('mongodb://localhost/mongoose_store');

```

- **If you have mongoose.connect in your file, Your Node server will crash if you aren't running `mongod`**


- Make sure your controller can access your model:
```
var Product = require('../models/products');
```

For testing purposes, especially for having quick access to those wacky Mongo ids, maybe think about having a route `/json` that `res.sends` an index of all the data in json format so that you can copy/paste ids into your url bar or cURL or what-have-you.

# Buy Button 

After you have your full CRUD app working, it's time to break/extend RESTful conventions according to your own lights. The app needs a buy button. It's up to you to make your own routes to facilitate it.

If a product is in stock (the qty is above 0), the **show** page should have a `BUY` button. If the product is out of stock, it should not have this button. 

When the `BUY` button is pressed, it will make a request to update the qty of the product (decrease it by 1). 
 
- What route should the `BUY` request go to? Maybe it could go to its own route.
- Since it `updates` the product, should it go to a `PUT` route?
- Do you need to send any data through to the route? You will need the id, but that is likely all you'll need.
- Can you edit the qty value just in the route? `product.qty -= 1`?
  - Will you have to `product.save()` if you do this?
  
# Commits

When you get to any of the following milestones, commit your work and include the number of your commit within the message.

<hr>
** Index - Commit your work.** <br>
The commit message should read: <br> 
"Index working".
<hr>

<hr>
** Show - Commit your work.** <br>
The commit message should read: <br> 
"Show working".
<hr>

<hr>
** Create - Commit your work.** <br>
The commit message should read: <br> 
"Create working".
<hr>

<hr>
** Update - Commit your work.** <br>
The commit message should read: <br> 
"Update working".
<hr>

<hr>
** Delete - Commit your work.** <br>
The commit message should read: <br> 
"Delete Working".
<hr>

<hr>
** Buy - Commit your work.** <br>
The commit message should read: <br> 
"Buy Button Working".
<hr>

<hr>
** CSS - Commit your work.** <br>
The commit message should read: <br> 
"App has style".
<hr>

# Investigation - 2nd Model

Make *another* model, this time for a User. The User will have:

```
username: String,
shopping_cart: Array
```

On the product **show** page, when a user presses `BUY`, the product will be added to the User's shopping cart.

View the shopping cart on the User's **show** page. (The User will need only a show page and none of the other routes).

# Hints, Tips, Notes

###SEED
You can use these seeds to get starting data if you so choose. Handy hint:  Make a route in your products controller `/seed/newproducts`, and to seed your database, just visit the route **once** in your browser.

```
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
```

# Mongoose commands - hints 

###index
```
Product.find(function(err, products) {
	console.log(products);
})
```

###create

```
Product.create(newProducts, function(err) {
	res.redirect('/products');
});
```

```	
// create with constructor function

var newProduct = new Product(req.body);

newProduct.save(function(err) {
	res.redirect('/products');
});
```



###show, edit
```
Product.findById(req.params.id, function(err, product) {
	console.log(product);
});
```

###update
```
Product.findOneAndUpdate( { _id: req.params.id }, req.body, function(err, product) {
	console.log(product);
});
```

```
Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, product) {
	console.log(product);
});
```

###delete
```
Product.remove({ _id: req.params.id}, function(err) {
	//
});
```

```
Product.findByIdAndRemove(req.params.id, function(err, data) {
	//
});
```



