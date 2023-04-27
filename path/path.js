const fs = require('fs');
// 相对路径，以下两种方式相同，都是在当前目录下创建文件（当前node 命令执行时的当前目录，而不是js文件所在的当目录）
// 相对路径的参照物：命令行的工作目录
fs.writeFileSync('./test.txt', '你好!');
fs.writeFileSync('test1.txt', '你好!');

// 绝对路径--以下两种效果一样
fs.writeFileSync('/test2.txt', '绝对路径的内容');
fs.writeFileSync('F:/test2.txt', '绝对路径的内容');

// 相对路径的参照物：命令行的工作目录
// 为了解决相对路径可能出现的bug，使用绝对路径变量：__dirname;
// __dirname:当前文件的所在目录的绝对路径
fs.writeFileSync(__dirname + '/text3.txt', '解决相对路径的bug');