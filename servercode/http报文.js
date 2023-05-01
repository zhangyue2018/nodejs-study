const http = require('http');
// 创建服务对象
const server = http.createServer((request, response) => {
    // 获取请求的方法
    console.log(request.method);
    // 获取请求的url
    console.log(request.url);
    // 获取http协议的版本号
    console.log(request.httpVersion);
    // 获取http协议的请求头
    console.log(request.headers);
    response.end('hello world'); // 设置响应体
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('端口监听成功!!');
});