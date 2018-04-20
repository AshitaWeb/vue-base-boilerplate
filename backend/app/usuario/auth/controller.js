const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const config = require('../../../config');
const Usuario = require('../model');

/*Usuario Routes*/
exports.login = async (req, res) => {
  const user = await Usuario.findOne({ login: req.body.login });

  if (!user) {
    res.json({
      success: false,
      message: 'Usuário não encontrado',
      login: req.body.login
    });
  } else {
    bcrypt.compare(req.body.password, user.password, function(err, ok) {
      if (ok) {
        console.log('Login de usuário: ' + user.nome + ' : ' + user.login);

        var beAToken = {};
        beAToken.login = user.login;
        beAToken._id = user._id;
        beAToken.nome = user.nome;
        beAToken.role = user.role;

        var token = jwt.sign(beAToken, config.secret, {
          expiresIn: '1d' // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Login efetuado com sucesso!',
          token: token
        });
      } else {
        res.json({ success: false, message: 'Usuário não encontrado' });
      }
    });
  }
};
