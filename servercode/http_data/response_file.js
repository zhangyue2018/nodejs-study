const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    let html = fs.readFileSync(__dirname + '/table.html');
    res.end(html); // end方法参数可以是字符串，也可以是buffer
});

server.listen(9000, () => {
    console.log('服务启动成功~~~');
});