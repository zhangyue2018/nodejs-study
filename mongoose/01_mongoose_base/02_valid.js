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
        name: {
            type: String,
            required: true,   // 标明该属性必须不为空
            unique: true, // 设置为独一无二
        },
        author: {
            type: String,
            default: '匿名'  // 默认值
        },
        style: {
            type: String,
            enum: ['言情', '志怪', '恐怖', '励志', '武侠', '历史', '军事', '人文']  // 枚举类型
        },
        price: Number
    });

    // 创建模型对象--对文档操作的封装对象
    // model(集合名称, 结构对象);
    let BookModel = mongoose.model('books', bookSchema);

    // 新增
    // BookModel.create({
    //     name: '红楼梦',
    //     author: '曹雪芹',
    //     style: '言情',
    //     price: 9.9
    // }).then(res => {
    //     console.log('res---', res);
    // }, err => {
    //     console.log('Error---', err);
    // })

    // BookModel.create({
    //     name: '西游记',
    //     author: '吴承恩',
    //     style: '志怪',
    //     price: 9.9
    // }).then(res => {
    //     console.log('res---', res);
    // }, err => {
    //     console.log('Error---', err);
    // })

    // BookModel.create({
    //     name: '水浒传',
    //     author: '施耐庵',
    //     style: '武侠',
    //     price: 9.9
    // }).then(res => {
    //     console.log('res---', res);
    // }, err => {
    //     console.log('Error---', err);
    // })

    // BookModel.create({
    //     name: '三国演义',
    //     author: '罗贯中',
    //     style: '军事',
    //     price: 9.9
    // }).then(res => {
    //     console.log('res---', res);
    // }, err => {
    //     console.log('Error---', err);
    // })

    // BookModel.create({
    //     name: '白蛇传',
    //     author: '未知',
    //     style: '言情',
    //     price: 9.9
    // }).then(res => {
    //     console.log('res---', res);
    // }, err => {
    //     console.log('Error---', err);
    // })

    // 删除
    // 删除一个--即使匹配上多个文档,也只会删除第一个匹配的文档
    // BookModel.deleteOne({price: 9.9}).then(res => console.log('删除成功---', res), err => console.log('删除失败---', err));

    // 删除多个
    // BookModel.deleteMany({price: 9.9}).then(res => console.log('删除成功---', res), err => console.log('删除失败----', err));

    // 更新集合中的文档
    // 更新一个文档--即使匹配上多个文档,也只会更新第一个匹配的文档
    // BookModel.updateOne({author: '未知'}, {price: 25.9}).then(res => console.log('更新成功--', res), err => console.log('更新失败----', err));
    // 更新多个文档
    // BookModel.updateMany({price: 9.9}, {price: 19.9}).then(res => console.log('更新成功--', res), err => console.log('更新失败----', err));

    // 读取文档
    // 读取单条文档
    // BookModel.findOne({price: 19.9}).then(res => console.log('读取成功----', res), err => console.log('读取失败----', err));
    
    // 按照id读取
    // BookModel.findById('645651c37cc2f1ef9eff48b0').then(res => console.log('读取成功----', res), err => console.log('读取失败----', err));
    
    // 批量读取-1
    // BookModel.find({price: 19.9}).then(res => console.log('读取成功----', res), err => console.log('读取失败----', err));
    // 批量读取-2
    // BookModel.find().then(res => console.log('读取成功----', res), err => console.log('读取失败----', err));

    // 条件控制
    // mongodb不能直接使用<, >, 等符号,需要使用替代符号
    /**
     * > : $gt
     * < : $lt
     * >= : $gte
     * <= : $lte
     * !== : $ne
     * 逻辑或: $or
     * 逻辑与: $and
     */
    // price小于20
    // BookModel.find({price: {$lt: 20}}).then(res => console.log('找到了---', res), err => console.log('没找到----', err));
    // 逻辑或
    // BookModel.find({$or: [{author: '罗贯中'}, {author: '曹雪芹'}]}).then(res => console.log('找到了---', res), err => console.log('没找到----', err));
    // 逻辑与
    // BookModel.find({$and: [{author: '罗贯中'}, {price: {$lt: 30}}]}).then(res => console.log('找到了---', res), err => console.log('没找到----', err));

    // 个性化读取
    // 字段筛选
    // BookModel.find().select({name: 1, author: 1, _id: 0}).then(res => console.log(res), err => console.log(err));
    
    // 数据排序 sort({price:1}):升序, sort({price:-1}):降序
    // BookModel.find().select({name: 1, author: 1, _id: 0}).sort({price: -1}).then(res => console.log(res), err => console.log(err));
    
    // 数据的截取
    // limit(n):截取前n个数据
    // skip(n):跳过前n个,取剩下的数据
    BookModel.find()
        .select({name: 1, author: 1, _id: 0})
        .sort({price: -1})
        .skip(1)
        .limit(3)
        .then(res => console.log(res), err => console.log(err));



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