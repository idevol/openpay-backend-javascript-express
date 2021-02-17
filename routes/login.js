var express = require('express');
var passport = require('passport');

function requireAuth(req,res,next){
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) next();
    else res.redirect('/login');
}

var route_login = express.Router();

route_login.get(
    '/', 
    requireAuth,
    function(req, res) {
        res.redirect('/dashboard');
    }
);

route_login.get(
    '/login', 
    function(req, res) {
        res.render('../views/login_form.ejs');
    }
);

route_login.post('/login',
    passport.authenticate(
        'local', {
            successRedirect: '/dashboard',
            failureRedirect: '/login',
            failureFlash: true
        }
    )
);

route_login.get(
    '/logout', 
    function(req, res) {
        req.logout();
        res.redirect('/login');
    }
);

module.exports = route_login;
