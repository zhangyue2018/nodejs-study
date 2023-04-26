/**
 * 需求：
 * 创建一个文件：座右铭.txt，写入内容：三人行，则必有我师焉
 */

const fs = require('fs');
// 异步写入
fs.writeFile('./座右铭.txt', '三人行，则必有我师焉', err => {
    if(err) {
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
});

// 同步写入
fs.writeFileSync('./data.txt', 'test data');
