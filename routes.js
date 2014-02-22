exports = module.exports = function(app, passport) {

	var index = require('./routes/index')
	, user = require('./routes/user')
	, login = require('connect-ensure-login');

	// Content
	app.get('/', index.index);

	// Auth
	app.get('/register', user.register);
	app.post('/register', user.registerPost);
	app.post('/login',
  	passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/',
                                   failureFlash: true })
	);
	app.get('/logout', user.logout);

	// Dashboard
	// app.get('/home', login.ensureLoggedIn('/'), index.home);
	app.get('/home', index.home);

	// User
	app.get('/me', login.ensureLoggedIn('/'), user.info);

	// app.all('*', require('./views/http/index').http404);
}
