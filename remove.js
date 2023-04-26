const fs = require('fs');

fs.unlink('./file/观书有感.txt', err => {
    if(err) {
        console.log('删除文件失败');
        return;
    }
    console.log('删除文件成功');
});

// 也可以用unlinkSync方法


// 14.4版本可以使用rm
// fs.rm('./file/观书有感2.txt', err => {
//     if(err) {
//         console.log('删除文件失败');
//         return;
//     }
//     console.log('删除文件成功');
// });

// 也可以使用rmSync方法

