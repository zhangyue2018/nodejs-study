const mongoose = require('mongoose');
// 连接mongodb服务
// 端口号27017是mongod服务默认监听的端口号，此处使用默认的端口号，也可以不写
// bilibili数据库如果不存在，会自动创建一个
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 设置回调
// 设置连接成功的回调
mongoose.connection.once('open', () => {
    console.log('连接成功');
    // 创建文档的结构对象
    // 设置集合中文档的属性以及属性值的类型
    let bookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    // 创建模型对象--对文档操作的封装对象
    // model(集合名称, 结构对象);
    let BookModel = mongoose.model('books', bookSchema);

    // 新增
    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 9.9
    }).then(res => {
        console.log('res---', res);
    }, err => {
        console.log('Error---', err);
    }).finally(() => {
        // 关闭数据库连接
        // 项目运行过程中不会添加此代码
        mongoose.disconnect();
    });

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