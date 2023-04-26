const fs = require('fs');
// 异步读取
fs.readFile('./data.txt', (err ,data) => {
    if(err) {
        console.log('读取失败');
        return
    }
    // 接收到的data是buffer数据（字节流）
    console.log(data.toString());
});

// 同步读取
let data = fs.readFileSync('./座右铭.txt');
console.log(data.toString());

