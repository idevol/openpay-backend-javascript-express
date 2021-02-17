require('dotenv').config();

module.exports = {
    'url' : 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST + '/' + process.env.DB_NAME + '?authSource=admin',
    'options': { useNewUrlParser: true }
};
