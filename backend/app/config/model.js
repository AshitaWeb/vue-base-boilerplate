var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    logo: String,
    versao: String,
});

var deepPopulate = require('mongoose-deep-populate')(mongoose);
Schema.plugin(deepPopulate,  {});

module.exports = mongoose.model('Config', Schema);
