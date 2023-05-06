var express = require('express');
var formidable = require('formidable');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portrait', function(req, res, next) {
    res.render('portrait');
});

router.post('/portrait', (req, res, next) => {
    let form = formidable({
        multiples: true,
        // 设置上传文件的保存目录
        uploadDir: path.resolve(__dirname, './../public/images'),
        // 下面这种方式也可以
        // uploadDir: __dirname + '/../public/images',
        // 保持文件后缀
        keepExtensions: true
    });
    form.parse(req, (err, fields, files) => {
        if(err) {
            return next(err);
        }
        console.log(fields); // fields存储文件上传之外的字段：text radio checkbox select
        console.log(files);  // 存储file类型的数据
    });
    res.send('成功');
});




module.exports = router;
