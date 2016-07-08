var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: String,
	age: String,
	gender: String,
	img: String
});

module.exports= mongoose.model('User', userSchema);