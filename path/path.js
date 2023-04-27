const fs = require('fs');
// 相对路径，以下两种方式相同，都是在当前目录下创建文件（当前node 命令执行时的当前目录，而不是js文件所在的当目录）
fs.writeFileSync('./test.txt', '你好!');
fs.writeFileSync('test1.txt', '你好!');

// 绝对路径--以下两种效果一样
fs.writeFileSync('/test2.txt', '绝对路径的内容');
fs.writeFileSync('F:/test2.txt', '绝对路径的内容');