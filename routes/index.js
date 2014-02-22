
/*
 * GET home page.
 */

exports.index = function(req, res){
  if(req.user)
    res.redirect('/home');
  res.render('index', { title: 'Express' });
};

exports.home = function(req, res){
  res.render('home', { title: 'Express' });
};
