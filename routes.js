exports = module.exports = function(app, passport) {

	var index = require('./routes/index')
	, user = require('./routes/user')
	, login = require('connect-ensure-login');

	// Content
	app.get('/', index.index);

	// Auth
	app.get('/register', user.register);
	app.post('/register', user.registerPost);
	app.get('/login', user.login);
	app.post('/login',
  	passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
	);
	app.get('/logout', user.logout);



	// User
	app.get('/me', login.ensureLoggedIn('/'), user.info);

	// app.all('*', require('./views/http/index').http404);
}
