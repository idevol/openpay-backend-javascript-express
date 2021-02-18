exports.login = function(req, res) {
    res.json({ isAuthenticated: req.isAuthenticated() });
};

exports.login_form = function(req, res) {
    res.render('../views/login_form.ejs');
};

exports.authenticated = function(req, res) {
    res.json({ message: 'It is authenticated.' });
};

exports.logout = function(req, res) {
    req.session.destroy(function (err) {
        res.json({ message: 'Logout.' });
    });
};
