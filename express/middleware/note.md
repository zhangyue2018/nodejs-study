# express中间件
## 中间件(Middleware)本质是一个回调函数
中间件可以像路由回调一样访问请求对象(request)和响应对象(response)

## 中间件作用
中间件的作用就是使用函数封装公共操作，简化代码

## 中间件类型
·全局中间件
·路由中间件

### 全局中间件
每一个请求到达服务端之后都会执行全局中间件函数

## 声明中间件函数：
let recordMiddleware = function(request, response, next) {
    // 实现功能代码
    // ......
    // 执行next函数（当如果希望执行完中间件函数之后，仍然继续执行路由中的回调函数，必须调用next）
    next();
}

## 静态资源中间件
express内置处理静态资源的中间件
const express = require('express');
const app = express();
app.use(express.static('.public'));

注：
1.index.html文件为默认打开的资源，如果public中有index.html，则此html默认为网站首页
2.如果静态资源与路由规则同事匹配，谁先匹配谁就响应。
app.get('/', (req, res) =>  {});
与
app.use(express.static('.public'));
谁在前就是谁先响应.

