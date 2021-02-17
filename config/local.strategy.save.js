var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var bcrypt = require('bcrypt');
var User = require('../models/user');

var createHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

module.exports = function () {
    passport.use(new LocalStrategy({
        passReqToCallback : true 
    },
    function(req, username, password, done) {
        console.log(username);
        console.log(password);

        findOrCreateUser = function(){
            // find a user in Mongo with provided username
            User.findOne({'username': username}, function(err, user) {
                // In case of any error return
                if (err){
                    console.log('Error in SignUp: '+err);
                    return done(err);
                }
                // already exists
                if (user) {
                    console.log('User already exists');
                    return done(null, false, 
                    req.flash('message','User Already Exists'));
                } else {
                    // if there is no user with that email
                    // create the user
                    var newUser = new User();
                    // set the user's local credentials
                    newUser.username = username;
                    newUser.password = createHash(password);
                    newUser.email = req.param('email');
                    // save the user
                    newUser.save(function(err) {
                        if (err){
                            console.log('Error in Saving user: '+err);  
                            throw err;  
                        }
                        console.log('User Registration succesful');    
                        return done(null, newUser);
                    });
                }
            });
        };
    }));
};