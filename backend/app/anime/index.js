const express = require('express');
const rotas = express.Router();

const controller = require('./controller');

// UPLOAD
const multer = require('multer');
const config = require('../../config');
const upload = multer({ dest: config.uploadPath });
rotas.get('/image/:hash', controller.getImage);
rotas.post('/upload', upload.single('file'), controller.upload);

rotas.post('/list', controller.index);
rotas.get('/:id', controller.get);
rotas.post('/', controller.new);
rotas.put('/', controller.edit);
rotas.delete('/:id', controller.delete);

module.exports = rotas;
