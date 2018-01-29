/*Produto Model*/
var Model = require('./model');
var config = require('../../config');
/*Produtos Routes*/
exports.index = function (req, res) {
    Model.findOne({})
     .exec(function (err, data) { //o que fazer com o resultado
        res.json({ success: true, data: data, err: err, form: req.body });
    });
};

exports.new = function (req, res) {
    var form = JSON.parse(req.body.data);
    Model.findOne({}, function (err, model) {

        if (!model) {
            var model = new Model(form);
        } else {
            model.versao = form.versao;
        }

        if (req.files.file) {
            var foto = req.files.file.path;
            model.logo = foto.replace(config.uploadPath, '');
        }

        delete req.files; // nao esquecer se nao deletar da treta para outras rotas de upload

        model.save(function (err, data) {
            //err null quando ta tudo certo, data traz o model inserido,
            if (!err && data) {
                //form apenas para debugar
                res.json({ success: true, data: data, err: err, form: form });
            } else {
                res.json({ success: false, data: data, err: err, form: form });
            }
        });

    });
};
