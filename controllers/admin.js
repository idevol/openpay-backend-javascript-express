var bcrypt = require('bcrypt');
var Admin = require('../models/admin');

var createHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

exports.list = function(req, res) {
    var query = Admin.find({});
    query.select('_id username email');
    query.exec(function (err, admins) {
        if (err) res.json({ error: 'DB error in signup' });
        console.log(admins);
        res.json({ data: admins });
    });
};

exports.new = function(req, res) {
    if (!req.body.username || !req.body.password || !req.body.email) {
        res.json({ error: 'Incompleted data' });
    } else {
        Admin.findOne({'username': req.body.username}, function(err, user) {
            if (err) {
                console.log('Error in signup: ' + err);
                res.json({ error: 'DB error in signup' });
            }
            if (user) {
                console.log('User already exists');
                res.json({ error: 'User already exists' });
            } else {
                var newAdmin = new User();
                newAdmin.username = req.body.username;
                newAdmin.password = createHash(req.body.password);
                newAdmin.email = req.body.email;
                newAdmin.save(function(err) {
                    if (err){
                        console.log('Error in Saving user: ' + err);
                        res.json({ error: 'Error in Saving user: ' + err }); 
                        throw err;  
                    }
                    console.log('User Registration succesful');    
                    res.json({ data: {userId: newAdmin.id} });
                });
            }
        });
    }
};

exports.get = function(req, res) {
    var query = Admin.findOne({'_id': req.param('admin_id')});
    query.select('_id username email');
    query.exec(function (err, user) {
        if (err) res.json({ error: 'DB error in signup' });
        console.log(user);
        res.json({ data: user });
    });
};

exports.edit = function(req, res) {
    var updateParams = {};
    if(req.body.password !== undefined && req.body.password !== null && req.body.password !== '') {
        updateParams.password = createHash(req.body.password);
    }
    if(req.body.email !== undefined && req.body.email !== null && req.body.email !== '') {
        updateParams.email = req.body.email;
    }
    if (!updateParams) {
        res.json({ error: 'Empty data' });
    } else {
        var query = Admin.updateMany({'_id': req.params.admin_id}, updateParams);
        query.select('_id username email');
        query.exec(function (err, user) {
            if (err) res.json({ error: 'DB error in signup' });
            console.log(user);
            res.json({ data: user });
        });
    }
};

exports.delete = function(req, res) {
    var query = Admin.deleteOne({'_id': req.params.admin_id});
    query.exec(function (err, user) {
        if (err) res.json({ error: 'DB error in signup' });
        console.log(user);
        res.json({ data: user });
    });
};
