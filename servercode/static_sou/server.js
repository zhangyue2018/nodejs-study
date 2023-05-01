/**
 *创建一个http服务，端口为9000，满足如下需求：
 GET    /index.html     响应 page/index.html 的文件内容
 GET    /css/app.css    响应 page/css/app.css 的文件内容
 GET    /images/logo.jpg  响应 page/images/logo.jpg 的文件内容 
 */
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let {pathname} = new URL(req.url, 'http://127.0.0.1');
    let fileName = __dirname + '/page' + pathname;

    fs.readFile(fileName, (err, data) => {
        console.log('读取文件成功');
        if(err) {
            res.statusCode = 500;
            res.end('没有找到');
            return;
        }
        res.end(data);
    });
});

server.listen(9000, () => {
    console.log('服务启动成功~~~');
});