module.exports = function(req, res, next) {
    // 判断
    if(!req.session.username) return res.redirect('/login');
    next();
}