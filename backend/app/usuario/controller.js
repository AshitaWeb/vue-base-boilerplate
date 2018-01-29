/* Model*/
var Model = require('./model');
var bcrypt = require('bcrypt-nodejs');

/* Routes*/
exports.index = function(req, res) {
	var texto = req.params.text;

	var filtro = {};
	filtro.ativo = true;

	if (texto) {
		texto = decodeURI(texto);
		filtro.$or = [];
		filtro.$or.push({nome: {$regex: texto, $options: 'ig'} });
	}

	Model.find(filtro)
		.skip(parseInt(req.params.skip) || 0).limit(parseInt(req.params.limit) || 25)
		.exec(function(err, data){ //o que fazer com o resultado

				Model.find(filtro).count()
				.exec(function(err, total){
					var response = {};
					response.total = total;
					response.data = data;
					res.json(response);
				});

		});
}


exports.inativos = function(req, res) {
	var texto = req.params.text;

	var filtro = {};
	filtro.ativo = false;

	if (texto) {
		texto = decodeURI(texto);
		filtro.$or = [];
		filtro.$or.push({nome: {$regex: texto, $options: 'ig'} });
	}

	Model.find(filtro)
		.skip(parseInt(req.params.skip) || 0).limit(parseInt(req.params.limit) || 25)
		.exec(function(err, data){ //o que fazer com o resultado

				Model.find(filtro).count()
				.exec(function(err, total){
					var response = {};
					response.total = total;
					response.data = data;
					res.json(response);
				});

		});
}

exports.get = function(req, res) {
	Model.findOne(
			{_id: req.params.id},// Where
			{password: 0},
			function(err, data){ // o que fazer com o resultado
				res.json(data);
			}
	);
}

exports.new = function(req, res) {
	var model = new Model(req.body);
	model.save(function (err, data) {
		//err null quando ta tudo certo, data traz o model inserido,
	  	if (!err && data) {
	  		//form apenas para debugar
			res.json({"success": true, "data": data, "err" : err, "form" : req.body});
		} else {
			res.json({"success": false, "data": data, "err" : err, "form" : req.body});
		}
	});
}

exports.delete = function(req, res) {
	Model.remove({_id: req.params.id},function(err, data) {
		res.json(data);
	})
}

exports.edit = function(req, res) {

	Model.findOne(
		{_id: req.body._id},
		function (err, model){
			if (req.body.password && req.body.password !== "") {
				model.password = req.body.password;
				console.log("senha alterada!");
			}
			model.login = req.body.login;
			model.nome = req.body.nome;
			model.email = req.body.email;

			model.save(function(err, data){
				if (!err && data) {
					res.json({"success": true, "data": data, "err" : err, "form" : req.body});
				} else {
					res.json({"success": false, "data": data, "err" : err, "form" : req.body});
				}
			});
		}
	);
/*

	Model.update(
		{_id: req.body._id}, //where
		req.body,//options
		function (err, data){
			if (!err && data) {
				res.json({"success": true, "data": data, "err" : err, "form" : req.body});
			} else {
				res.json({"success": false, "data": data, "err" : err, "form" : req.body});
			}
		}
	);*/
}