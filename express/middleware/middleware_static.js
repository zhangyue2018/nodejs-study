const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// 设置静态资源中间件
// express.static()返回一个中间件函数,static的参数是静态资源文件夹(也叫web网站的根目录)的路径;
// 所有的静态资源都会去这里面找
app.use(express.static(__dirname + '/public'));

app.get('/home', (req, res) => {
    
    res.send('前台首页');
});

app.get('/admin', (req, res) => {
    res.send('登录页');
});

app.get('/setting', (req, res) => {
    res.send('设置首页');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(9000, () => {
    console.log('服务已启动');
});