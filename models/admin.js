var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model('Admin', adminSchema);
