const express = require('express');
const homeRouter = require('./homeRouter');
const adminRouter = require('./adminRouter');

const app = express();

// 设置静态资源中间件
// express.static()返回一个中间件函数,static的参数是静态资源文件夹(也叫web网站的根目录)的路径;
// 所有的静态资源都会去这里面找
app.use(express.static(__dirname + '/public'));

app.use(homeRouter);
app.use(adminRouter);

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>');
});

app.listen(9000, () => {
    console.log('服务已启动');
});