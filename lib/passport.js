/**
 * Module dependencies.
 */
var LocalStrategy = require('passport-local').Strategy;

exports = module.exports = function(app, passport) {

  /**
   * Local auth
   */

  passport.use(new LocalStrategy(
    function(username, password, done) {
      console.log(username + " " + password);
      app.db.models.User.findOne({email: username, password: require('crypto').createHash('md5').update(password).digest("hex")}, function(err, user) {
        if(user) {
          done(null, user);
        } else {
          done(true, false, { message: 'Incorrect username or password' });
        }
      })
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {

    // TODO Request user from API
    app.db.models.User.findById(id, function(err, user) {
          done(err, user);
    });

  });

}
