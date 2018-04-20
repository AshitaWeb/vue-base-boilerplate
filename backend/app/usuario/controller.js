/* Model*/
const Model = require('./model');
const bcrypt = require('bcrypt-nodejs');
const to = require('../../core/to');

/* Routes*/
exports.index = async (req, res) => {
  const [err, data] = await to(
    Model.find()
      .skip(req.body.skip || 0)
      .limit(req.body.limit || 50)
  );

  const total = await Model.find().count();

  res.json({ total, data });
};

exports.get = async (req, res) => {
  const data = await Model.findOne({ _id: req.params.id });
  res.json(data);
};

exports.new = async (req, res) => {
  var model = new Model(req.body);
  const [err, data] = await to(model.save());

  if (!err && data) {
    res.json({ success: true, data, err, form: req.body });
  } else {
    res.json({ succsess: false, data, err, form: req.body });
  }
};

exports.delete = async (req, res) => {
  const data = await Model.remove({ _id: req.params.id });
  res.json(data);
};

exports.edit = async (req, res) => {
  const model = await Model.findOne({ _id: req.body._id });

  if (req.body.password && req.body.password !== '') {
    model.password = req.body.password;
  }

  model.login = req.body.login;
  model.nome = req.body.nome;
  model.email = req.body.email;
  model.name = req.body.name;
  model.role = req.body.role;

  const [err, data] = await to(model.save);

  if (!err && data) {
    res.json({ success: true, data, err, form: req.body });
  } else {
    res.json({ success: false, data, err, form: req.body });
  }
};
