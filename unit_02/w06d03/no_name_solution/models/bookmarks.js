var mongoose = require('mongoose');

var bookmarkSchema = mongoose.Schema({
	name: String,
	url: String
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);
