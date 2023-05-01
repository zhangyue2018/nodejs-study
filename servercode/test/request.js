const http = require('http');

const server = http.createServer((request, response) => {
    const method = request.method;
    const url = new URL(request.url, 'http://127.0.0.1');
    const pathname = url.pathname;
    response.setHeader('content-type', 'text/html;charset=utf-8');
    if(method === 'GET') {
        if(pathname === '/login') {
            response.end('登陆页面');
        } else if(pathname === '/reg') {
            response.end('注册页面');
        } else response.end('not found');
    } else response.end('not found');    
});

server.listen(9000, () => {
    console.log('启动成功~~');
});