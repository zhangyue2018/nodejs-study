# 网页URL的路径

## 网页URL的绝对路径
完整形式：http://atguigu.com/web              直接向目标资源发送请求，容易理解。网站的外链会用到此形式
省略协议：//aiguigu.com/web                   与页面URL的协议拼接形成完整URL之后再发送请求。大型网站用的比较多
省略协议，主机，端口：/web                     与页面URL的协议、主机名、端口拼接形成完整URL再发送请求

## 网页URL的相对路径
相对路径在发送请求时，需要与当前页面URL路径计算，等到完整URL后，再发送请求。
例如当前网页url为：http://www.atguigu.com/course/h5.html
则以下相对路径请求：
./css/app.css        拼接成：http://www.atguigu.com/course/css/app.css
js/app.js            拼接成：http://www.atguigu.com/course/js/app.js
../images/logo.jpg   拼接成: http://www.atguigu.com/images/logo.jpg
../../mp4/show.mp4   拼接成: http://www.atguigu.com/mp4/show.mp4           // 并不会超出网站根目录