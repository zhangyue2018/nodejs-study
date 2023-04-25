//1. alloc:会对内存进行清零操作
let buf = Buffer.alloc(200);
// console.log(buf);

//2.不会对内存进行清零
let buf2 = Buffer.allocUnsafe(200);
// console.log(buf2);

//3. from
let buf3 = Buffer.from('hello');
// console.log(buf3);
// 如果from的参数是数组，则数组元素必须要是数字，否则创建的buffer的字节会被0覆盖
let buf4 = Buffer.from([1,2,3, 'go', 5]);
// console.log(buf4);

// buffer与字符串的转换
let buf5 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf5.toString()); // 默认是utf-8

// []读取和写入
console.log(buf5[0].toString(2)); // 参数2表示进制
buf5[0] = 96;
console.log(buf5.toString());

// 溢出
buf5[0] = 361; // 舍弃高位数字 361转换成二进制是 0001 0110 1001，超出8bit的0001被舍弃，实际存入的是 0110 1001

// 中文
let buf6 = Buffer.from('你好');
console.log(buf6);  // <Buffer e4 bd a0 e5 a5 bd>， utf-8 中，每个中文占3个byte