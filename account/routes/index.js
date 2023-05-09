var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/account', function(req, res, next) {
  res.render('list');
});

router.get('/account/create', function(req, res, next) {
    res.render('create');
});

router.post('/account', (req, res) => {
    console.log('req.body---', req.body);
    res.render('success', {msg: '添加成功', url: '/account'});
});

module.exports = router;
