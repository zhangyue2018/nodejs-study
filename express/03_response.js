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


app.listen(9000, () => {
    console.log('服务已启动~~');
});