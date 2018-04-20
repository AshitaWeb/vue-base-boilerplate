/* Model*/
var Model = require('./model');
const config = require('../../config');
const fs = require('fs');
const path = require('path');

const to = require('../../core/to');

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
  const [err, data] = await to(
    Model.update({ _id: req.body._id }, { $set: req.body })
  );

  if (!err && data) {
    res.json({ success: true, data, err, form: req.body });
  } else {
    res.json({ success: false, data, err, form: req.body });
  }
};
