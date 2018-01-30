var mongoose = require('mongoose');

var Schema = mongoose.Schema({
	name: String,
  image: String,
});

module.exports = mongoose.model('Anime', Schema);