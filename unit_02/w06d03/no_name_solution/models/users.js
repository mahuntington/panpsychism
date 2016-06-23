var mongoose = require('mongoose');
var bookmarkSchema = require('./bookmarks').schema;

var userSchema = mongoose.Schema({
	username: String,
	bookmarks: [bookmarkSchema]
});

module.exports = mongoose.model('User', userSchema);
