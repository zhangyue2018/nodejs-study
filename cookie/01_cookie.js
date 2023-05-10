const express = require('express');

const app = express();

app.get('/set-cookie', (req, res) => {
    // res.cookie('name', 'zzyy');  // 会在浏览器关闭的时候销毁
    res.cookie('name', 'lisi', { maxAge: 60 * 1000 }); // maxAge单位是ms
    res.cookie('theme', 'blue', { maxAge: 60 * 1000 });
    res.send('hello world');
});

app.get('/remove-cookie', (req, res) => {
    res.clearCookie('name');
    res.send('删除成功~~');
});

app.listen(3000, () => {
    console.log('服务已经启动');
});