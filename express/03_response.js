const express = require('express');
// 创建应用对象
const app = express();

// 创建路由
app.get('/request', (req, res) => {
    // 原生响应
    // res.statusCode = 404;
    // res.statusMessage = 'love';
    // res.setHeader('xxx', 'yyy');
    // res.write('hello express');
    // res.end('response');
    
    // express 响应
    // res.status(500);
    // res.set('aaa', 'bbb');
    // // 使用express的send方法会自动设置响应头的content-type
    // res.send('你好 Express');

    // 连贯写法
    res.status(500).set('aaa', 'ccc').send('这都是OK的');
});

app.get('/other', (req, res) => {
    // 跳转响应
    // res.redirect('http://www.baidu.com');
    
    // 下载响应
    // res.download(__dirname + '/01_form.html');

    // JSON响应
    // res.json({
    //     name: '尚硅谷',
    //     slogon: '让天下没有难学的技术'
    // });

    // 响应文件内容
    res.sendFile(__dirname + '/01_code.js');
});


app.listen(9000, () => {
    console.log('服务已启动~~');
});