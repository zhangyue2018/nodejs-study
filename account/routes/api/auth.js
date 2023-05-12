const express = require('express');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const UserModel = require('../../models/UserModel');
const {secret} = require('../../config/config');

const router = express.Router();

// 用户登录
router.post('/login', (req, res) => {
    console.log(req.body);
    let {username, password} = req.body;
    UserModel.findOne({username, password: md5(password)}).then(data => {
        if(!data) {
            res.json({
                code: '2002',
                msg: '账号或密码错误~~~',
                data: null
            });
        } else {
            let token = jwt.sign({
                username: data.username,
                _id: data._id
            }, secret, {
                expiresIn: 60 * 60 * 24 * 7
            });
            res.json({
                code: '0000',
                msg: '登陆成功',
                data: token
            });
        }
    }, err => {
        res.json({
            code: '2001',
            msg: '数据库读取失败~~~',
            data: null
        });
    });
});

// 退出登录
router.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

module.exports = router;