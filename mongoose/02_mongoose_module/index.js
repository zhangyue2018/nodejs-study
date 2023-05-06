const db = require('./db/db');
const BookModel = require('./models/BookModel');

db(() => {
    console.log('数据库连接成功');
    BookModel.find()
        .select({name: 1, author: 1, _id: 0})
        .sort({price: -1})
        .skip(1)
        .limit(3)
        .then(res => console.log(res), err => console.log(err));

}, () => {
    console.log('数据库连接失败');
});


