const fs = require('fs');

// fs.rename('./data1.txt', '观书有感.txt', err => {
//     if(err) {
//         console.log('重命名失败');
//         return;
//     }
//     console.log('重命名成功---');
// });

// fs.renameSync('./data3.txt', './观书有感2.txt');

// 文件的移动
// fs.rename('./观书有感.txt', './file/观书有感.txt', err => {
//     if(err) {
//         console.log('移动文件失败');
//         return;
//     }
//     console.log('移动文件成功~~');
// });

fs.renameSync('./观书有感2.txt', './file/观书有感2.txt', err => {
    if(err) {
        console.log('移动文件失败');
        return;
    }
    console.log('移动文件成功~~');
});