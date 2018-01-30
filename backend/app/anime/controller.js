/* Model*/
var Model = require('./model');

/* Routes*/
exports.index = function(req, res) {
	var texto = req.params.text;
	const filtro = {};

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
	);
}