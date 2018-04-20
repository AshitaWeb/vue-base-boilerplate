const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  nome: String
});

module.exports = mongoose.model('Manga', Schema);
