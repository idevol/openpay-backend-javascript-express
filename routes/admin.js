var express = require('express');

var admin_router = express.Router();
var auth_middleware = require('../middlewares/auth');
var admin_controller = require('../controllers/admin');

admin_router.get(
    '/',
    auth_middleware.require,
    admin_controller.list
);

admin_router.post(
    '/',
    auth_middleware.require,
    admin_controller.new
);

admin_router.get(
    '/:admin_id',
    auth_middleware.require,
    admin_controller.get
);

admin_router.put(
    '/:admin_id',
    auth_middleware.require,
    admin_controller.edit
);

admin_router.delete(
    '/:admin_id',
    auth_middleware.require,
    admin_controller.delete
);

module.exports = admin_router;
