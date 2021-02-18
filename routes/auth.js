var requireAuthentication = require('../middlewares/require_auth');
var express = require('express');
var passport = require('passport');

var route_login = express.Router();

route_login.get(
    '/',
    function(req, res) {
        res.json({ isAuthenticated: req.isAuthenticated() });
    }
);

route_login.get(
    '/login-form', 
    function(req, res) {
        res.render('../views/login_form.ejs');
    }
);

route_login.post(
    '/',
    passport.authenticate('local', { failureFlash: true }),
    requireAuthentication,
    function(req, res) {
        res.json({ message: 'It is authenticated.' });
    }
);

route_login.delete(
    '/', 
    function(req, res) {
        req.session.destroy(function (err) {
            res.json({ message: 'Logout.' });
        });
    }
);

module.exports = route_login;
