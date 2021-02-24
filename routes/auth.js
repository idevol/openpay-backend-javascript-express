var express = require('express');
var passport = require('passport');

var auth_router = express.Router();
var body_parser = require('../middlewares/body_parser');
var auth_middleware = require('../middlewares/auth');
var auth_controller = require('../controllers/auth');

auth_router.get(
    '/',
    auth_controller.authenticated
);

auth_router.get(
    '/login-form', 
    auth_controller.login_form
);

auth_router.post(
    '/',
    body_parser.jsonParser,
    passport.authenticate('local', { failureFlash: true }),
    auth_middleware.require,
    auth_controller.login
);

auth_router.delete(
    '/', 
    auth_controller.logout
);

module.exports = auth_router;
