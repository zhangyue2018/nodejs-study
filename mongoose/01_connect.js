const mongoose = require('mongoose');
// 连接mongodb服务
// 端口号27017是mongod服务默认监听的端口号，此处使用默认的端口号，也可以不写
// bilibili数据库如果不存在，会自动创建一个
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 设置回调
// 设置连接成功的回调
mongoose.connection.once('open', () => {
    console.log('连接成功');
});

// 设置连接错误的回调
mongoose.connection.on('error', () => {
    console.log('连接失败');
});

// 设置连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭');
});

setTimeout(() => {
    // 关闭mongodb连接
    mongoose.disconnect();
}, 3000);