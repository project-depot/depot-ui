var crypto = require('crypto')
  , V = require('validator');

exports.info = function(req, res){
  res.json(req.user);
};

exports.register = function(req, res){
  res.render('register');
};

exports.registerPost = function(req, res){

  if (V.isNull(req.body.email) || V.isNull(req.body.password) || !V.isEmail(req.body.email)) {
    res.send(400, {'error': 'inputs are malformed'});
    return;
  }

  var data = {
    email: req.body.email,
    password: crypto.createHash('md5').update(req.body.password).digest("hex"),
  };

  // TODO create account on backend through API

  console.log(data);
  res.send(200);
};

exports.login = function(req, res){
  res.render('login');
};

exports.logout = function(req, res){
  req.logout();
  res.redirect('/');
};
