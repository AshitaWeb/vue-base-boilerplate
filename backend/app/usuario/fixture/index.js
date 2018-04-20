var express = require('express');
var route = express.Router();
var controller = require('./controller');
route.get('/usuario/:pass?', controller.usuarios);
module.exports = route;
