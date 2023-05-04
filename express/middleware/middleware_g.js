const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// 声明中间件函数
function recordMiddleware(req, res, next) {
    let {url, ip} = req;
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}   ${ip}\r\n`);
    next(); // next指向后续的中间件函数或者路由回调函数
}

// 使用中间价函数
app.use(recordMiddleware);

app.get('/home', (req, res) => {
    
    res.send('前台首页');
});

app.get('/admin', (req, res) => {
    res.send('登录页');
});

app.listen(9000, () => {
    console.log('服务已启动');
});