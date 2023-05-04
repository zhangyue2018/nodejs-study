const express = require('express');
// 创建应用对象
const app = express();

app.get('/', (req, res) => {
    res.end('home');
});

// 创建路由
app.get('/home', (req, res) => {
    res.end('hello world==');
});

app.post('/login', (req, res) => {
    res.end('login login');
});

// 匹配所有方法
app.all('/test', (req, res) => {
    res.end('test test');
});
// 404 响应--所有的方法，所有的路径
app.all('*', (req, res) => {
    res.end();
});

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务启动成功~~');
});