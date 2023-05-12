var express = require('express');
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');
// 声明中间件检测登录
let checkLoginMiddleware = require('../../middleware/checkLoginMiddleware');

var router = express.Router();
// 首页
router.get('/', (req, res) => {
    res.redirect('/account');
});

/* GET home page. */
router.get('/account', checkLoginMiddleware, function(req, res, next) {

    let accounts = [
        {
            id: '00001',
            title: '发工资',
            time: '2023-05-10',
            type: '1',
            account: '4396',
            remarks: '终于发工资啦~'
        },
        {
            id: '00002',
            title: '买鼠标',
            time: '2023-05-12',
            type: '-1',
            account: '4346',
            remarks: '鼠标坏了，换一个新的'
        },
        {
            id: '00003',
            title: '吃饭',
            time: '2023-05-15',
            type: '-1',
            account: '4316',
            remarks: ''
        }
    ];
    AccountModel.find().then(data => {
        console.log('---data----', data);

        res.render('list', {accounts: data, moment});
    }, err => {
        res.status(500).send('读取数据失败!');
    });
  
});

router.get('/account/create', checkLoginMiddleware, function(req, res, next) {
    res.render('create');
});

router.get('/account/:id', checkLoginMiddleware, (req, res) => {
    let id = req.params.id;

    AccountModel.deleteOne({_id: id}).then(data => {
        res.render('success', {msg: '删除成功', url: '/account'});
    }, err => {
        res.status(500).send('删除失败!!');
    });
});

router.post('/account', checkLoginMiddleware, (req, res) => {
    console.log('req.body---', req.body);
    AccountModel.create({
        ...req.body,
        time: moment(req.body.time).toDate()
    }).then(() => {
        res.render('success', {msg: '添加成功', url: '/account'});
    }, err => {
        res.status(500).render('插入失败~~~');
    });
    
});

module.exports = router;
