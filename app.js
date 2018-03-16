/**
 * Created by fly on 2017/11/19.
 */
let express = require('express');
let app = express();
let path = require('path');
let ejs = require('ejs');
let favicon = require('serve-favicon');
let bodyParser = require('body-parser');
let session = require('express-session');
let flash = require('connect-flash');
let cookie = require('cookie');
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.use(session({
    resave:true,
    secret:'password',
    saveUninitialized:true
}));
app.use(flash());
app.engine('html',require('ejs').__express);
app.use(favicon(path.join(__dirname, 'public', 'favicon.jpg')));
app.use(bodyParser.urlencoded({extended:true}));//解析客户端提交过来的请求体，并转为对象赋值给res.body
app.use(express.static(path.resolve('node_modules')));//引用静态文件加载中间件，将node_modules作为根目录
let index = require('./routes/index');
let users = require('./routes/users');
let articles = require('./routes/articles');
app.use(function (req,res,next) {
    res.locals.user = req.session.user;
    res.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();
    next();
});
app.use('/',index);
app.use('/users',users);
app.listen(8080);
