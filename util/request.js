require('dotenv').config();

var request = require('request');

var op_url = process.env.OP_HOST + '/' + process.env.OP_API_VERSION + '/' + process.env.OP_MERCHANT_ID;
var op_auth = 'Basic ' + Buffer.from(process.env.OP_SECRET_KEY + ':').toString('base64');

exports.openpay = function(res, method, path, body) {
    op_request_params = {
        url : op_url + path,
        method: method,
        headers : {
            'Authorization' : op_auth
        }
    };

    if (!!body) {
        op_request_params.headers['Content-Type'] = 'application/json;charset=UTF-8'; 
        op_request_params.body = JSON.stringify(body);
    }

    request(
        op_request_params,
        function (error, response, body) {
            if (error) res.json({ error: 'Openpay request error.' });
            var out = body;
            try {
                out = JSON.parse(body);
            } catch (e) {
                console.log('Parse JSON error: ' + e);
            }
            res.json({ data: out });
        }
    );
};