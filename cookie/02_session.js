const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

// 设置session的中间件
app.use(session({
    name: 'sid',  // 设置cookie的name，默认值是connect.sid
    secret: 'bilibili',  // 密钥,参与加密的字符串（又称签名） 加盐
    saveUninitialized: false, // 是否为每次请求都设置一个cookie用来存储session的id
    resave: true, // 是否在每次请求时重新保存session
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/bilibili', // 数据库的连接配置
    }),
    cookie: {
        httpOnly: true, // 开启后前端无法通过js操作获取cookie
        maxAge: 1000 * 60,  // 这一条 是控制sessionID的过期时间（设置浏览器cookie的生命周期和后端session的生命周期）
    }
}));

app.get('/', (req, res) => {
    res.send('home');
});

// 登录
app.get('/login', (req, res) => {
    // username=admin&password=admin
    if(req.query.username === 'admin' && req.query.password === 'admin') {
        // 设置session信息
        req.session.username = 'admin';
        // 成功响应
        res.send('登陆成功');
    } else {
        res.send('登陆失败~~~');
    }
});

// session读取
app.get('/cart', (req, res) => {
    // 检测session是否存在用户数据
    if(req.session.username) {  // 中间件已经对session进行处理了
        res.send(`购物车页面，欢迎您${req.session.username}`);
    } else {
        res.send('您还没有登录~~~');
    }
});

// sesiion销毁
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send('退出成功~~~');
    });
});

app.listen(3000, () => {
    console.log('服务已经启动~');
});