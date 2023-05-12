var express = require('express');
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');
const checkTokenMiddleware = require('../../middleware/checkTokenMiddelware');
var router = express.Router();

// 记账本的列表
router.get('/account', checkTokenMiddleware, function(req, res, next) {
    console.log('/account---', req);
    AccountModel.find().then(data => {
        res.json({
            code: '0000',
            msg: '读取成功',
            data
        });
    }, err => {
        res.json({
            code: '1001',
            msg: '读取失败',
            data: null
        });
    });
});
// 删除记录
router.delete('/account/:id', checkTokenMiddleware, (req, res) => {
    let id = req.params.id;

    AccountModel.deleteOne({_id: id}).then(data => {
        res.json({
            code: '0000',
            msg: '删除账单成功',
            data: {}
        });
    }, err => {
        res.json({
            code: '1003',
            msg: '删除账单失败',
            data: null
        });
    });
});
// 新增记录
router.post('/account', checkTokenMiddleware, (req, res) => {
    console.log('req.body---', req.body);
    AccountModel.create({
        ...req.body,
        time: moment(req.body.time).toDate()
    }).then((data) => {
        res.json({
            code: '0000',
            msg: '创建成功',
            data
        });
    }, err => {
        res.status(500).render('插入失败~~~');
        res.json({
            code: '1002',
            msg: '创建失败',
            data: null
        });
    });
});
// 获取单个账单信息
router.get('/account/:id', checkTokenMiddleware, (req, res) => {
    let id = req.params.id;
    AccountModel.findById({_id: id}).then(data => {
        res.json({
            code: '0000',
            msg: '读取单条数据成功',
            data
        });
    }, err => {
        res.json({
            code: '1004',
            msg: '读取单条数据失败',
            data: null
        });
    });
});

// 更新单个账单信息
router.patch('/account/:id', checkTokenMiddleware, (req, res) => {
    let id = req.params.id;
    AccountModel.updateOne({_id: id}, req.body)
        .then(data => {
            return AccountModel.findById({_id: id})
        }, err => {
            res.json({
                code: '1005',
                msg: '更新账单信息失败',
                data: null
            });
        })
        .then(data => {
            res.json({
                code: '0000',
                msg: '更新账单信息成功',
                data
            });
        }, err => {
            res.json({
                code: '1004',
                msg: '读取单条数据失败',
                data: null
            });
        });
});

module.exports = router;
