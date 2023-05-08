var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/account', function(req, res, next) {
  res.render('list');
});

router.get('/account/create', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.send('添加记录');
  });

module.exports = router;
