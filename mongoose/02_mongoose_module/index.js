const mongoose = require('mongoose');
const db = require('./db/db');

db(() => {
    console.log('数据库连接成功');
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
    BookModel.find()
        .select({name: 1, author: 1, _id: 0})
        .sort({price: -1})
        .skip(1)
        .limit(3)
        .then(res => console.log(res), err => console.log(err));

}, () => {
    console.log('数据库连接失败');
});


