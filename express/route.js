const express = require('express');

const app = express();

app.all('/:id.html', (req, res) => {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    console.log(req.params.id);
    res.end('商品详情');
});

app.listen(9000, () => {
    console.log('服务已启动');
});