var crypto = require('crypto')
  , V = require('validator');

exports.info = function(req, res){
  res.json(req.user);
};

exports.registerPost = function(req, res){

  if (V.isNull(req.body.username) || V.isNull(req.body.password) || !V.isEmail(req.body.username)) {
    res.send(400, {'error': 'inputs are malformed'});
    return;
  }

  if (V.isNull(req.body.password) || V.isNull(req.body['password-confirm'])) {
    res.send(400, {'error': 'inputs are malformed'});
    return;
  }

  if (req.body.password != req.body['password-confirm']) {
    res.send(400, {'error': 'inputs are malformed'});
    return;
  }

  var data = {
    email: req.body.username,
    password: crypto.createHash('md5').update(req.body.password).digest("hex"),
  };

  // TODO create account on backend through API
  req.app.db.models.User.findOne({ email: req.body.username }, function (err, user) {
    if (err) { res.send(409) }
    if (!user) {
      user = new req.app.db.models.User(data)
      user.save(function (err, user) {
        req.login(user, function (error) {
          if (error) {
            throw error;
          }
          res.send(200)
        });

      });
    } else {
      req.login(user, function (error) {
          if (error) {
            throw error;
          }
          res.send(200)
        });
    }
  });

};

exports.logout = function(req, res){
  req.logout();
  res.redirect('/');
};
