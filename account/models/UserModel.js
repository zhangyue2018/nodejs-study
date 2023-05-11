const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
});

// 创建模型对象--对文档操作的封装对象
// model(集合名称, 结构对象);
let UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;