var mongoose = require('mongoose');
var locationSchema = require('./locations').schema;

var userSchema = mongoose.Schema({

	username: String,
	locations: [locationSchema]

});

module.exports = mongoose.model('User', userSchema);