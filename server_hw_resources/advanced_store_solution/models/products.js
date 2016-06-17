var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	name: String,
	description: String,
	img: String,
	price: Number,
	qty: Number
});

module.exports = mongoose.model('Product', productSchema);
