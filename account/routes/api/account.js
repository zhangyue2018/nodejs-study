var express = require('express');
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');
var router = express.Router();

/* GET home page. */
router.get('/account', function(req, res, next) {
    AccountModel.find().then(data => {
        console.log('---data----', data);

        res.render('list', {accounts: data, moment});
    }, err => {
        res.status(500).send('读取数据失败!');
    });
  
});

router.get('/account/create', function(req, res, next) {
    res.render('create');
});

router.get('/account/:id', (req, res) => {
    let id = req.params.id;

    AccountModel.deleteOne({_id: id}).then(data => {
        res.render('success', {msg: '删除成功', url: '/account'});
    }, err => {
        res.status(500).send('删除失败!!');
    });
});

router.post('/account', (req, res) => {
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
