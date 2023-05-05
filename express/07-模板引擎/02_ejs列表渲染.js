const ejs = require('ejs');
const fs = require('fs');

const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙和尚'];

const str = fs.readFileSync(__dirname + '/02_html.html').toString();
const result = ejs.render(str, {xiyou});

console.log('result--', result);