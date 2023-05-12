var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');

var indexRouter = require('./routes/web/index');
const authRouter = require('./routes/web/auth');
const apiRouter = require('./routes/api/account');
const authApiRouter = require('./routes/api/auth');
const {DBHOST, DBPORT, DBNAME} = require('./config/config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 设置session的中间件
app.use(session({
    name: 'sid',  // 设置cookie的name，默认值是connect.sid
    secret: 'bilibili',  // 密钥,参与加密的字符串（又称签名） 加盐
    saveUninitialized: false, // 是否为每次请求都设置一个cookie用来存储session的id
    resave: true, // 是否在每次请求时重新保存session
    store: MongoStore.create({
        mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`, // 数据库的连接配置
    }),
    cookie: {
        httpOnly: true, // 开启后前端无法通过js操作获取cookie
        maxAge: 1000 * 60 * 60 * 7,  // 这一条 是控制sessionID的过期时间（设置浏览器cookie的生命周期和后端session的生命周期）
    }
}));

app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/api', apiRouter);
app.use('/api', authApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('404');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
