var express = require('express');

var route_home = express.Router();

route_home.get(
    '/',
    function(req, res) {
        res.send('');
    }
);

module.exports = route_home;
