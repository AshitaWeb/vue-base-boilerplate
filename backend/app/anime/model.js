var mongoose = require('mongoose');

var Schema = mongoose.Schema({
	name: String,
  mimetype: String,
  filename: String,
  originalname: String
});

module.exports = mongoose.model('Anime', Schema);