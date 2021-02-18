var requireAuthentication = require('../middlewares/require_auth');
var express = require('express');

var route_customers = express.Router();

route_customers.get(
    '/',
    requireAuthentication,
    function(req, res) {
        res.json({ message: 'Customers list' });
    }
);

route_customers.post(
    '/',
    requireAuthentication,
    function(req, res) {
        res.json({ message: 'New customer' });
    }
);

route_customers.get(
    '/:customer_id',
    requireAuthentication,
    function(req, res) {
        res.json({ message: 'Get customer' });
    }
);

route_customers.put(
    '/:customer_id',
    requireAuthentication,
    function(req, res) {
        res.json({ message: 'Edit customer' });
    }
);

route_customers.delete(
    '/:customer_id',
    requireAuthentication,
    function(req, res) {
        res.json({ message: 'Delete customer' });
    }
);

module.exports = route_customers;
