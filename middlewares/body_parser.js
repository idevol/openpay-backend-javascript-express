var bodyParser = require('body-parser');

exports.urlencodedParser = bodyParser.urlencoded({ extended: true });
exports.jsonParser = bodyParser.json();
