var mongoose = require('mongoose');

var Schema = mongoose.Schema({
	nome: String,
});

module.exports = mongoose.model('Alimento', Schema);