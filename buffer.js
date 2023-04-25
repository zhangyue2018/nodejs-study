//1. alloc:会对内存进行清零操作
let buf = Buffer.alloc(200);
// console.log(buf);

//2.不会对内存进行清零
let buf2 = Buffer.allocUnsafe(200);
// console.log(buf2);

//3. from
let buf3 = Buffer.from('hello');
console.log(buf3);
// 如果from的参数是数组，则数组元素必须要是数字，否则创建的buffer的字节会被0覆盖
let buf4 = Buffer.from([1,2,3, 'go', 5]);
console.log(buf4);
