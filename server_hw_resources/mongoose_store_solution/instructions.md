touch server.js
npm init
npm install --save express
npm install --save body-parser
npm install --save method-override
npm install --save ejs
npm install --save mongoose

require dependencies
add port and listener

make folders
 - controller
 - models
 - views

set up controller to test (no model yet, just test)
set up controller as middleware


console.log to make sure routes work

.

export model:
module.exports = mongoose.model('Product', productSchema);

connect with mongo through mongoose
// mongoose.connect('mongodb://localhost/mongoose_store');


require the model in the controller
seed the model with a seed route that you will access only once.


Make an index route, test it by just sending the json of all products from Mongoose.


Make a show route, test it by sending
the json of a single product by id from Mongoose.

Make a create route (with a redirect) to test with Postman or cURL. 
Set up bodyparser as middleware.
console.log req.body after making a request via Postman or cURL, to see it data is being passed.

Save contents of req.body to database:
var newProduct = new Product(req.body)
Check the products route to see all the products including the new one.


Make put route for update. Send data through with cURL or Postman and test console.log req.body.














