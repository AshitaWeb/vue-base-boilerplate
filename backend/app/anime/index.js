var express = require('express');
var rotas = express.Router();
/*arquivo com as funcoes da rota*/
var controller = require('./controller');
var multer = require('multer')

const config = require('../../config')
const upload = multer({ dest: config.uploadPath })

/*Rotas*/

rotas.get('/image/:hash', controller.getImage);

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

rotas.post('/upload', upload.single('file'), controller.upload);

/*Export*/
module.exports = rotas;
