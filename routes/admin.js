var requireAuthentication = require('../middlewares/require_auth');
var express = require('express');

var route_admin = express.Router();

route_admin.get(
    '/',
    requireAuthentication,
    function(req, res) {
        res.json({ message: 'Admins list' });
    }
);

route_admin.post(
    '/',
    requireAuthentication,
    function(req, res) {
        res.json({ message: 'New admin' });
    }
);

route_admin.get(
    '/:admin_id',
    requireAuthentication,
    function(req, res) {
        res.json({ message: 'Get admin' });
    }
);

route_admin.put(
    '/:admin_id',
    requireAuthentication,
    function(req, res) {
        res.json({ message: 'Edit admin' });
    }
);

route_admin.delete(
    '/:admin_id',
    requireAuthentication,
    function(req, res) {
        res.json({ message: 'Delete admin' });
    }
);

module.exports = route_admin;
