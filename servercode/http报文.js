const http = require('http');
const url = require('url');
// 创建服务对象
const server = http.createServer((request, response) => {
    // // 获取请求的方法
    // console.log(request.method);
    // // 获取请求的url
    // console.log(request.url);
    // // 获取http协议的版本号
    // console.log(request.httpVersion);
    // // 获取http协议的请求头
    // console.log(request.headers);
    // 获取请求体
    // let body = '';
    // request.on('data', chunk => {
    //     body += chunk;
    // });
    // request.on('end', () => {
    //     console.log('body---', body);
    //     response.end(body);
    // });

    // 获取请求路径和查询字符串
    let res = url.parse(request.url, true); // parse第二个参数，如果为true，则res.query被解析成对象,默认为false
    console.log(res);
    response.end(res.path);
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('端口监听成功!!');
});