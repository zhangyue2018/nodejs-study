const fs = require('fs');
// 异步读取
// fs.readFile('./data.txt', (err ,data) => {
//     if(err) {
//         console.log('读取失败');
//         return
//     }
//     // 接收到的data是buffer数据（字节流）
//     console.log(data.toString());
// });

// // 同步读取
// let data = fs.readFileSync('./座右铭.txt');
// console.log(data.toString());


// 流式读取
const rs = fs.createReadStream('./data.txt');
rs.on('data', chunk => {
    console.log(chunk.length); // 65536 字节 => 64KB
});

// 4. end 可选事件
rs.on('end', () => {
    console.log('读取完成');
});