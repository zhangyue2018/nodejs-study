const jwt = require('jsonwebtoken');
const {secret} = require('../config/config');

module.exports = function(req, res, next) {
    let token = req.get('token');
    if(!token) {
        return res.json({
            code: '2003',
            msg: 'token 缺失',
            data: null
        });
    }
    jwt.verify(token, secret, (err, data) => {
        if(err) {
            res.json({
                code: '2004',
                msg: '校验失败',
                data: null
            });
        } else next();
    });
}