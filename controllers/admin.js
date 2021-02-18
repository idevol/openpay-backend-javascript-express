exports.list = function(req, res) {
    res.json({ message: 'Admins list' });
};

exports.new = function(req, res) {
    res.json({ message: 'New admin' });
};

exports.get = function(req, res) {
    res.json({ message: 'Get admin' });
};

exports.edit = function(req, res) {
    res.json({ message: 'Edit admin' });
};

exports.delete = function(req, res) {
    res.json({ message: 'Delete admin' });
};
