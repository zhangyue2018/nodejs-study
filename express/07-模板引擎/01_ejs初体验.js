const ejs = require('ejs');
const fs = require('fs');

const china = '中国';
const weather = '今天天气不错~~';

const str = fs.readFileSync(__dirname + '/01_html.html').toString();
const result = ejs.render(str, {china, weather});

console.log('result--', result);