require('dotenv').config();

exports.url = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST + '/' + process.env.DB_NAME + '?authSource=admin';

exports.options =  { useNewUrlParser: true };
