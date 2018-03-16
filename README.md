#安装模块
1.npm install body-parser cookie-parser debug ejs express morgan mysql serve-favicon express-session connect-mongo mongoose connect-flash multer async -s
2.路由的编写
2.1路由分为俩部分，一为首页（），二为用户，三为文章，四。。。等各有各得路由，每个主文件下包含分路由
3.引进模块，app.use('模块'，模块使用方法)
4.引入模板引擎
4.1使用path模块，resolve，views为当前绝对路径
4.2app.set(1-3);
5.public放静态文件（图片，图标，第三方类库）
6.引用静态文件方法，1.拷贝到lib目录下2.使用静态文件中间件。此处使用简便方法，中间件方法
7.先前端后后端
8.实现提交用户注册路由 post
8.1在路由中获得请求体，然后把用户数据保存到数据库中
8.2保存完毕跳转到登录页
9.1登录控制引用session中间件res.locals.user=req.session.user
10.node_modules中的static_file存放后期修改版面文件
11.数据库匹配，框架编写
12.数据查询、数据更新，数据删除，数据显示