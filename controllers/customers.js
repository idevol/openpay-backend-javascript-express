exports.list = function(req, res) {
    res.json({ message: 'Customers list' });
};

exports.new = function(req, res) {
    res.json({ message: 'New customer' });
};

exports.get = function(req, res) {
    res.json({ message: 'Get customer' });
};

exports.edit = function(req, res) {
    res.json({ message: 'Edit customer' });
};

exports.delete = function(req, res) {
    res.json({ message: 'Delete customer' });
};
