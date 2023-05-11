const express = require('express');
const md5 = require('md5');
const UserModel = require('../../models/UserModel');

const router = express.Router();

router.get('/reg', (req, res) => {
    res.render('auth/reg');
});

// 注册用户
router.post('/reg', (req, res) => {
    console.log(req.body);

    UserModel.create({...req.body, password: md5(req.body.password)}).then(data => {
        res.render('success', {msg: '注册成功', url: '/login'});
    }, err => {
        res.status(500).send('注册失败，请稍后再试');
    });
});


router.get('/login', (req, res) => {
    res.render('auth/login');
});

// 用户登录
router.post('/login', (req, res) => {
    console.log(req.body);
    let {username, password} = req.body;
    UserModel.findOne({username, password: md5(password)}).then(data => {
        if(!data) res.send('账号或密码错误~~~~');
        else {
            // 写入session
            req.session.username = data.username;
            req.session._id = data._id;
            res.redirect('/account');  // 登陆成功后，跳转到对应的页面
        }
    }, err => {
        res.status(500).send('登录失败，用户名或密码不对');
    });
});
module.exports = router;