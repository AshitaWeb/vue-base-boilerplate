const express = require('express');
const rotas = express.Router();

const controller = require('./controller');

rotas.post('/list', controller.index);
rotas.get('/:id', controller.get);
rotas.post('/', controller.new);
rotas.put('/', controller.edit);
rotas.delete('/:id', controller.delete);

module.exports = rotas;
