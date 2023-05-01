const http = require('http');

const server = http.createServer((request, response) => {
    // 设置响应行
    // 设置响应状态码
    response.statusCode = 202;
    // 设置响应状态的描述--一般不修改这个
    response.statusMessage = 'hello';

    // 设置响应头
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.setHeader('server', 'nodejs');
    // 设置多个相同的响应头
    response.setHeader('my-header', ['a', 'b', 'c']);

    // 设置响应体--一般用write方法设置响应体后，end方法里面就不用放数据了
    response.write('你好');
    response.write('今天天气不错啊');
    response.end();

});

server.listen(9000, () => {
    console.log('服务启动成功~~');
})