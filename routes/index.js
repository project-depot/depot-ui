
/*
 * GET home page.
 */

exports.index = function(req, res){
  if(req.user)
    res.redirect('/home');
  res.render('index', { title: 'Depot' });
};

exports.home = function(req, res){
  // res.render('home', { title: 'Depot | Home', active: "account" });
  res.redirect('/account');
};

exports.account = function(req, res){
  res.render('account', { title: 'Depot | Account', active: "account"});
};

exports.files = function(req, res){
  res.render('files', { title: 'Depot | Files', active: "files"});
};

exports.ftp = function(req, res){
  res.render('ftp', { title: 'Depot | FTP', active: "ftp" });
};
