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
// fs.writeFileSync('./data.txt', 'test data');

// 异步追加写入
fs.appendFile('./座右铭.txt', '，择其善者而从之，其不善者而改之。', err => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('异步追加写入文件，成功');
});

// 同步追加写入文件
fs.appendFileSync('./data.txt', '\r\n温故而知新，可以为师矣');


// writeFile实现追加写入
fs.writeFile('./座右铭.txt', '\r\n良禽择木而栖，识时务者为俊杰', {flag: 'a'}, err => {
    if(err) {
        console.log('追加失败：', err);
        return;
    }
    console.log('追加写入文件成功---writeFile');
});