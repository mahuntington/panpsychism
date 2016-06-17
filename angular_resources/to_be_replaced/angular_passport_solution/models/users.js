var mongoose = require('mongoose');
var locationSchema = require('./locations').schema;

var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

	username: String,
	email: String,
	password: String,
	locations: [locationSchema]

});

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', userSchema);
