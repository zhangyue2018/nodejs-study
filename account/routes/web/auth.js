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
module.exports = router;