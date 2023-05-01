const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    let {pathname} = new URL(req.url, 'http://127.0.0.1');
    if(pathname === '/') {
        let html = fs.readFileSync(__dirname + '/index.html');
        res.end(html); // end方法参数可以是字符串，也可以是buffer
    } else if(pathname === '/index.js') {
        let jsFile = fs.readFileSync(__dirname + '/index.js');
        res.end(jsFile);
    } else if(pathname === '/index.css') {
        let cssFile = fs.readFileSync(__dirname + '/index.css');
        res.end(cssFile);
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
    
});

server.listen(9000, () => {
    console.log('服务启动成功~~~');
});