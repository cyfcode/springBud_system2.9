/**
 * Created by fly on 2017/11/19.
 */
let express = require('express');
let router = express.Router();
router.get('/add',function (req,res) {
    res.render('article/add',{title:'发表文章'});
});
router.post('/add',function (req,res) {
    res.send('发表成功！');
});
module.exports = router;