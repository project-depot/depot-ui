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
      // TODO Request user from API or create
      return done(null, {});
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    // TODO Request user from API
  });

}
