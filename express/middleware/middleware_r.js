const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// 声明中间件
let checkCodeMiddleware = (req, res, next) => {
    if(req.query.code === '521') {
        next();
    } else {
        res.send('暗号错误');
    }
}

app.get('/home', (req, res) => {
    
    res.send('前台首页');
});

app.get('/admin', checkCodeMiddleware, (req, res) => {
    res.send('登录页');
});

app.get('/setting', checkCodeMiddleware, (req, res) => {
    res.send('设置首页');
});

app.listen(9000, () => {
    console.log('服务已启动');
});