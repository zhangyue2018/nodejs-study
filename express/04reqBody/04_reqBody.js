/**
 * 按照要求搭建HTTP服务
 * 
 * get   /login  显示表单网页
 * POST  /login  获取表单中的[用户名]和[密码]
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// 解析JSON格式的请求体的中间件
// const jsonParser = bodyParser.json();

// 解析querystring格式的请求体的中间件
const urlencodeParser = bodyParser.urlencoded({ extended: false });

app.get('/login', (req, res) => {
    // res.send('表单页面');
    res.sendFile(__dirname + '/04_form.html');
});

app.post('/login', urlencodeParser, (req, res) => {
    console.log(req.body);
    res.send('获取用户的数据');
});

app.listen(9000, () => {
    console.log('server is running……');
});