const mongoose = require('mongoose');

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

module.exports = BookModel;