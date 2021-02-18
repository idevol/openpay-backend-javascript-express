exports.require = function(req, res, next) {
    if (req.isAuthenticated()) next();
    else res.status(401).json({ message: 'It is not authenticated.' });
};
