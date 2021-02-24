require('dotenv').config();

var request = require('request');

var op_url = process.env.OP_HOST + '/' + process.env.OP_API_VERSION + '/' + process.env.OP_MERCHANT_ID;
var op_auth = 'Basic ' + new Buffer(process.env.OP_SECRET_KEY + ':').toString('base64');

exports.openpay = function(res, method, path, body) {
    op_request = {
        url : op_url + path,
        method: method,
        headers : {
            'Authorization' : op_auth
        }
    };

    if (!!body) {
        op_request.headers['Content-Type'] = 'application/json;charset=UTF-8'; 
        op_request.body = JSON.stringify(body);
    }

    request(
        op_request,
        function (error, response, body) {
            if (error) res.json({ error: 'Openpay request error.' });
            var out = '';
            try {
                out = JSON.parse(body);
            } catch (e) {
                out = body;
            }
            res.json({ data: out });
        }
    );
};