var express = require('express');
var rotas = express.Router();
/*arquivo com as funcoes da rota*/
var controller = require('./auth.controller');


/*Rotas*/
/*get all*/
rotas.post('/login', controller.login);

/*Export*/
module.exports = rotas;
