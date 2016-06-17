var mongoose = require('mongoose');
var productSchema = require('./products').schema;

var userSchema = mongoose.Schema({
	username: String,
	password: String,
	email: String,
	shopping_cart: [productSchema]
});

module.exports = mongoose.model('User', userSchema);