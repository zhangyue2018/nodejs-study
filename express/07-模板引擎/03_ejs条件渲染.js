const ejs = require('ejs');
const fs = require('fs');

let isLogin = false;

const htmlStr = fs.readFileSync( __dirname + '/03_html.html').toString();
const result = ejs.render(htmlStr, {isLogin});

console.log('result:', result);