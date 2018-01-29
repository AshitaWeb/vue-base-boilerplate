var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema({
  login: {
  	type: String,
  	index: { unique: true, dropDups: true }
  },
  password: String,
  nome: String,
  email: String,
  ativo: {type: Boolean, default: true}
});

Schema.pre('save', function(next) {
	var user = this;

	if (!user.isModified('password')) return next();

	bcrypt.genSalt(10, function(err, salt) {
		if (err) return next(err);

		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});

module.exports = mongoose.model('Usuario', Schema);