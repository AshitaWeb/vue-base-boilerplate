var express = require('express');
var rotas = express.Router();
/*arquivo com as funcoes da rota*/
var controller = require('./controller');

/*Rotas*/

/*get by id*/
rotas.get('/:id', controller.get);

/*get all*/
rotas.get('/:skip?/:limit?/:text?', controller.index);

/*save one*/
rotas.post('/', controller.new);

/*Edit one */
rotas.put('/', controller.edit);

/*Delete one */
rotas.delete('/:id', controller.delete);

/*Export*/
module.exports = rotas;
