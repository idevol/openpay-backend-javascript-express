var request = require('../util/request');

exports.list = function(req, res) {
    request.openpay(res, 'GET', '/customers');
};

exports.new = function(req, res) {
    request.openpay(res, 'POST', '/customers', req.body);
};

exports.get = function(req, res) {
    request.openpay(res, 'GET', '/customers/' + req.params.customer_id);
};

exports.edit = function(req, res) {
    request.openpay(res, 'PUT', '/customers/' + req.params.customer_id, req.body);
};

exports.delete = function(req, res) {
    request.openpay(res, 'DELETE', '/customers/' + req.params.customer_id, req.body);
};
