const fs = require('fs');

// fs.mkdir('./html', err => {
//     if(err) {
//         console.log('创建文件夹失败');
//         return;
//     }
//     console.log('创建文件夹成功');
// });

// 递归创建
// fs.mkdir('a/b/c', {recursive:true}, err => {
//     if(err) {
//         console.log(err);
//         return;
//     }
// });

// 也可以使用mkdirSync方法


// 读取文件夹  readdir
// 读取出指定目录下的所有一级目录及文件
// fs.readdir('./html', (err, data) => {
//     if(err) return console.log('读取文件夹失败');
//     console.log('读取文件夹成功', data);
// });

// console.log(fs.readdirSync('./'));

// 删除文件夹--rmdir
// 这个是删除空文件夹，删非空文件夹会失败
fs.rmdir('./html', err => {
    if(err) return console.log('删除文件夹失败');
    console.log('删除文件夹成功'); 
});
// 递归删除文件夹
fs.rmdirSync('./a', {recursive: true});