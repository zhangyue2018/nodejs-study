/**
 *创建一个http服务，端口为9000，满足如下需求：
 GET    /index.html     响应 page/index.html 的文件内容
 GET    /css/app.css    响应 page/css/app.css 的文件内容
 GET    /images/logo.jpg  响应 page/images/logo.jpg 的文件内容 
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
// 声明一个变量
const mimes = {
    'html': 'text/html',
    'css': 'text/css',
    'jpg': 'image/jpeg',
    'js': 'text/javascript',
    'png': 'image/png',
    'gif': 'image/gif',
    'mp4': 'video/mp4',
    'mp3': 'audio/mpeg',
    'json': 'application/json'
}

const server = http.createServer((req, res) => {
    if(req.method !== 'GET') {
        res.statusCode = 405;
        res.end('<h1>405 Method Not Allowed</h1>');
        return;
    }
    let {pathname} = new URL(req.url, 'http://127.0.0.1');
    // 生命根目录变量
    let root = __dirname + '/page';
    let fileName = root + pathname;
    fs.readFile(fileName, (err, data) => {
        console.log('读取文件成功');
        if(err) {
            res.setHeader('content-type', 'text/html;charset=utf-8');
            switch(err.code) {
                case 'ENOENT':
                    res.statusCode = 404;
                    res.end('<h1>404 Not Found</h1>');
                    break;
                case 'EPERM':
                    res.statusCode = 403;
                    res.end('<h1>403 Forbidden</h1>');
                    break;
                default:
                    res.statusCode = 500;
                    res.end('<h1>500 Server Internal Error<h1/>');
            }
            return;
        }
        const ext = path.extname(fileName).slice(1);
        const type = mimes[ext];
        if(type) {
            if(ext === 'html') {
                // html文件里可以设置charset，但是服务端设置的响应头setHeader中的charset的优先级高于html文件中设置的charset
                res.setHeader('content-type', type + ';charset=utf-8');
            } else {
                // 对于css，js，图片等，如果没有设置charset，则会根据网页html的charset进行解析
                res.setHeader('content-type', type);
            }
            
        } else {
            // 对于未知的资源类型，可以选择'application/octet-stream'类型，浏览器在遇到该类型的响应时
            // 会对响应体内容进行独立存储，也就是常见的瞎咋效果
            res.setHeader('content-type', 'application/octet-stream');
        }
        res.end(data);
    });
});

server.listen(9000, () => {
    console.log('服务启动成功~~~');
});