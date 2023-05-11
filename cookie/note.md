# session和cookie的区别

## 1.存在的位置
cookie: 浏览器端
session: 服务端

## 2.安全性
cookie: 是以明文的方式存放在客户端的，安全性相对较低
session: 存放于服务器中，安全性相对较好

## 3.网络传输量
cookie：设置内容过多会增大报文体积
session: 数据存储在服务器，只是通过cookie传递id，所以不影响传输效率

## 4.存储限制
cookie: 浏览器限制单个cookie保存的数据不能超过4k，且单个域名下的存储数量也有限制
session: session数据存储在服务器中，所以没有这些限制