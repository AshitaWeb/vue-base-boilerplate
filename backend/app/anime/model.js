const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: String,
  mimetype: String,
  filename: String,
  originalname: String
});

module.exports = mongoose.model('Anime', Schema);
