const http = require('http');
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
    // let res = url.parse(request.url, true); // parse第二个参数，如果为true，则res.query被解析成对象,默认为false
    // console.log(res);
    // response.end(res.path);

    // 获取查询路径和查询字符串的另外一种方式
    // new URL(path[, base]); // 如果path是完整的url（包含协议域名），则不用传base参数
    let url = new URL('/a?search=12345', 'http://127.0.0.1:8080');
    console.log(url);
    console.log(url.searchParams.get('search'));
    response.end('url new');
});

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('端口监听成功!!');
});