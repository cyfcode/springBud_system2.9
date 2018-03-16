/**
 * Created by fly on 2017/11/19.
 */
let express = require('express');
let router = express.Router();//调用router方法，得到中间件实例
let {User} = require('../model');
router.get('/',function (req,res) {
   res.render('index',{title:'Home'}) ;
});
router.post('/',function (req,res) {
    let user = req.body;
    User.isLogin({userName: user.username}, function(error){
        if(error){
            console.log('其他用户已经登录此帐号');
            req.flash('success','登录成功！！！');
            req.session.success = '登录成功！！！';
            res.redirect('/users/input');
            return;
        }
        User.verify({
            userName: user.username,
            password: user.password
        }, function(error, userInfo){
            if(error){
                req.flash('error','账号或密码错误！！！');
                req.session.error = '账号或密码错误！！！';
                res.redirect('back');
            }else {
                User.setIsLogin(userInfo.id, function(error){
                    if(error){
                        throw Error(error);
                    }
                });
                //向会话中写入值user = doc
                req.flash('success','登录成功！！！');
                req.session.success = '登录成功！！！';
                req.session.user = userInfo;
                res.redirect('/');
            }
        });
    });
});
module.exports = router;//导出router，别的函数也可以使用