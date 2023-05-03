const express = require('express');
// 创建应用对象
const app = express();

// 创建路由
app.get('/home', (req, res) => {
    res.end('hello world==');
});

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务启动成功~~');
});