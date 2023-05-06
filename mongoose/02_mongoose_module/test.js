const db = require('./db/db');
const MovieModel = require('./models/MovieModel');

db(() => {
    console.log('数据库连接成功!!');
    MovieModel.insertMany([
        {
            name: '天下无贼',
            author: '张艺谋',
            tiket: 99,
            price: 25
        },
        {
            name: '满城尽带黄金甲',
            auhor: '张艺谋',
            tiket: 88,
            price: 55
        },
        {
            name: '功夫',
            author: '周星驰',
            tiket: 453,
            price: 65
        }
    ]).then(res => console.log('添加数据成功--', res), err => console.log('添加数据失败---', err));
});