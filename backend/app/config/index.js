var express = require('express');
var config = require('../../config');
var rotas = express.Router();
/*arquivo com as funcoes da rota*/
var controller = require('./controller');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: config.uploadPath + 'logo' });

/*Rotas*/
/*get all*/
rotas.get('/', controller.index);

/*save one*/
rotas.post('/', multipartMiddleware, controller.new);

/*Export*/
module.exports = rotas;
