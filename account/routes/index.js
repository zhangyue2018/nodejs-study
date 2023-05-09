var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/account', function(req, res, next) {

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
  res.render('list', {accounts});
});

router.get('/account/create', function(req, res, next) {
    res.render('create');
});

router.post('/account', (req, res) => {
    console.log('req.body---', req.body);
    res.render('success', {msg: '添加成功', url: '/account'});
});

module.exports = router;
