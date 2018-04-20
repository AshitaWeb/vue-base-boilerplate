const express = require('express');
const rotas = express.Router();
const controller = require('./controller');
rotas.post('/login', controller.login);
module.exports = rotas;
