var express = require('express');

var customers_router = express.Router();
var body_parser = require('../middlewares/body_parser');
var auth_middleware = require('../middlewares/auth');
var customer_controller = require('../controllers/customers');

customers_router.get(
    '/',
    auth_middleware.require,
    customer_controller.list
);

customers_router.post(
    '/',
    body_parser.jsonParser,
    auth_middleware.require,
    customer_controller.new
);

customers_router.get(
    '/:customer_id',
    body_parser.urlencodedParser,
    auth_middleware.require,
    customer_controller.get
);

customers_router.put(
    '/:customer_id',
    body_parser.urlencodedParser,
    body_parser.jsonParser,
    auth_middleware.require,
    customer_controller.edit
);

customers_router.delete(
    '/:customer_id',
    body_parser.urlencodedParser,
    auth_middleware.require,
    customer_controller.delete
);

module.exports = customers_router;
