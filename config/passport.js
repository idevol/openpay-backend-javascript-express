var Admin = require('../models/admin');
var passport = require('passport');

module.exports = function(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });
      
    passport.deserializeUser(function(id, done) {
        Admin.findById(id, function(err, user) {
            done(err, user);
        });
    });
        
    require('./local.strategy.auth')();
};
