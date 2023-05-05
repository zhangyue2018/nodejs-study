const express = require('express');
const path = require('path');

const app = express();

// 声明中间件
app.use((req, res, next) => {
    // 检查请求头中的referer是否为127.0.0.1
    // 获取referer
    let referer = req.get('referer');
    console.log('refere---', referer);
    if(referer) {
        // 实例化
        let url = new URL(referer);
        // 获取hostname
        let hostname = url.hostname;
        if(hostname !== '127.0.0.1') {
            res.status(404).send('<h1>404 Not Found</h1>');
            return;
        }
    }
    next();
});

app.use(express.static(path.resolve(__dirname, '../middleware/public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(9000, () => {
    console.log('服务已启动……');
});