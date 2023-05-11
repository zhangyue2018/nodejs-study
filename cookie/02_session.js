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
app.listen(3000, () => {
    console.log('服务已经启动~');
});