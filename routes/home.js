var express = require('express');

var home_router = express.Router();
var home_controller = require('../controllers/home');

home_router.get(
    '/',
    home_controller.out
);

module.exports = home_router;
