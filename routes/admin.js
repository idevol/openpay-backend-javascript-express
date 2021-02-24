var express = require('express');

var admin_router = express.Router();

var body_parser = require('../middlewares/body_parser');
var auth_middleware = require('../middlewares/auth');
var admin_controller = require('../controllers/admin');

admin_router.get(
    '/',
    auth_middleware.require,
    admin_controller.list
);

admin_router.post(
    '/',
    body_parser.jsonParser,
    auth_middleware.require,
    admin_controller.new
);

admin_router.get(
    '/:admin_id',
    body_parser.urlencodedParser,
    auth_middleware.require,
    admin_controller.get
);

admin_router.put(
    '/:admin_id',
    body_parser.urlencodedParser,
    body_parser.jsonParser,
    auth_middleware.require,
    admin_controller.edit
);

admin_router.delete(
    '/:admin_id',
    body_parser.urlencodedParser,
    auth_middleware.require,
    admin_controller.delete
);

module.exports = admin_router;
