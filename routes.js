exports = module.exports = function(app, passport) {

	var index = require('./routes/index')
	, user = require('./routes/user')
	, login = require('connect-ensure-login');

	// Content
	app.get('/', index.index);

	// Auth
	app.post('/register', user.registerPost);
	app.post('/login', function(req, res, next) {
  	passport.authenticate('local', function(err, user, info) {
  		console.log(user);
	    if (err) { res.send(500) }
	    if (!user) { res.send(500) }
	    req.login(user, function (error) {
        if (error) {
          throw error;
        }
        res.send(200)
      });
	  })(req, res, next);
	});
	app.get('/logout', user.logout);

	// Dashboard
	app.get('/home', login.ensureLoggedIn('/'), index.home);
  app.get('/account', login.ensureLoggedIn('/'), index.account);
  app.get('/files', login.ensureLoggedIn('/'), index.files);
  app.get('/ftp', login.ensureLoggedIn('/'), index.ftp);
	// app.get('/home', index.home);

	// User
	app.get('/me', login.ensureLoggedIn('/'), user.info);

	// app.all('*', require('./views/http/index').http404);
}
