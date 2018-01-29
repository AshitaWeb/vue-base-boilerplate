var express = require('express');
var route = express.Router();
/*arquivo com as funcoes da rota*/
var fixture = require('./fixture.controller');

/*Rotas*/
/*get all*/
route.get('/usuario/:w6?', fixture.usuarios);

/*Export*/
module.exports = route;
