/**
 * Created by fly on 2017/11/19.
 */
let express = require('express');
let router = express.Router();
let {Guest} = require('../model');
let {User} = require('../model');
router.get('/business', function (req, res) {
    /*User.find({},function (error,people) {
        res.render('user/business', {title: '营业',people});
    });*/
    res.render('user/business', {title: '营业系统'});
});
/**
 *营业系统
 * 1.客户信息查找*/
router.post('/business', function (req, res) {
    let guest = req.body;
    Guest.selectUser({
        name_furi: guest.name_furi,
        name_kan: guest.name_kan,
        mo_tel: guest.mo_tel,
        address: guest.address,
        cl_askdate: guest.cl_askdate,
    }, function (err, results) {
        if (err) {
            alert(error);
        } else {
            alert('查找成功！');
        }
    })
});
router.get('/input', function (req, res) {
    res.render('user/input', {title: '信息录入'});
});
/**
 * 客户信息录入
 **/
router.post('/input', function (req, res) {
    let guest = req.body;
    Guest.inputUser({
        internet_type: guest.internet_type,
        name_furi: guest.name_furi,
        name_kan: guest.name_kan,
        birthday: guest.birthday,
        sex: guest.sex,
        mo_tel: guest.mo_tel,
        zip_code: guest.zip_code,
        address: guest.address,
        guest_from: guest.guest_from,
        present: guest.present,
        worker: guest.worker,
        memo: guest.memo,
        cl_askdate: guest.cl_askdate,
    }, function (err, results) {
        if (err) {
            res.redirect('back');
        } else {
            res.redirect('/users/business');
            res.console.log('写入成功');
        }
    })
});
router.get('/logout', function (req, res) {
    res.render('/', {title: 'logout'});
});
router.get('/guest', function (req, res) {
    res.render('user/guest', {title: '客户信息'});
});
router.get('/account', function (req, res) {
    res.render('user/account', {title: '账号分配'});
});
/**
 * 账号添加*/
router.post('/account', function (req, res) {
    let user = req.body;
    User.addUser({
        userName: user.username,
        password: user.password,
        sort: user.sort,
        business: user.business
    }, function(error,result){
        if(error){
            res.redirect('back');
            console.log(error);
        }else{
            res.send('添加成功！');
            console.log('添加成功')
        }
    });
});
router.get('/service',function (req,res) {
   res.render('user/service',{title:'客服系统'});
});
module.exports = router;