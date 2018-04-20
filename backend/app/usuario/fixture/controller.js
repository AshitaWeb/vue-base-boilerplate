/*Usuario Model*/
'use strict';
const Usuario = require('../model');
const config = require('../../../config');
const moment = require('moment');
const async = require('async');

/*Usuario Routes*/
exports.usuarios = function(req, res) {
  if (req.params.pass != config.passFixture) {
    res.json('denied!');
  } else {
    Usuario.findOne({ login: 'admin' }, function(err, usuario) {
      if (!usuario) {
        usuario = new Usuario();
        usuario.password = 'admin';
        usuario.login = 'admin';

        usuario.save(function(err, user) {
          if (err) {
            res.json(err);
          } else {
            res.json(user);
          }
        });
      } else {
        res.json('admin já cadastrado!');
      }
    });
  }
};
