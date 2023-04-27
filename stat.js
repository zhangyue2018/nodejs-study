const fs = require('fs');

fs.stat('./.gitignore', (err, data) => {
    if(err) return console.log('查看资源失败');
    console.log('查看资源成功', data);
    console.log(data.isFile());
    console.log(data.isDirectory());
});