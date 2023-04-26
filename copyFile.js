const fs = require('fs');

// 方式一：readFile
// let data = fs.readFileSync('./data.txt');
// fs.writeFileSync('./data1.txt', data);

// 方式二：流式读取--占用内存空间较小
const rs = fs.createReadStream('./data.txt');
const ws = fs.createWriteStream('./data3.txt');

rs.on('data', chunk => {
    ws.write(chunk);
});