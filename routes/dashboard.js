var express = require('express');
var route_dashboard = express.Router();

route_dashboard.get(
    '/', 
    function(req, res) {
        res.send('dashboard');
    }
);

route_dashboard.get(
    '/new-admin', 
    function(req, res) {
        res.send('New admin');
    }
);

module.exports = route_dashboard;
