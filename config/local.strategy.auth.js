var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var bcrypt = require('bcrypt');
var Admin = require('../models/admin');

var isValidPassword = function(user, password){
    return bcrypt.compareSync(password, user.password);
};

module.exports = function () {
    passport.use(new LocalStrategy({
        passReqToCallback : true
    },
    function(req, username, password, done) { 
        // check in mongo if a user with username exists or not
        Admin.findOne({ 'username' :  username }, 
            function(err, user) {
                // In case of any error, return using the done method
                if (err) { console.log(err); return done(err); }
                // Username does not exist, log error & redirect back
                if (!user) {
                    console.log('User Not Found with username: ' + username);
                    return done(null, false, req.flash('message', 'User Not found.'));                 
                }
                // User exists but wrong password, log the error 
                if (!isValidPassword(user, password)){
                    console.log('Invalid Password');
                    return done(null, false, req.flash('message', 'Invalid Password'));
                }
                // User and password both match, return user from 
                // done method which will be treated like success
                return done(null, user);
            }
        );
    }));
};
