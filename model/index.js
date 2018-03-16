/**
 * Created by Administrator on 2017/11/21.
 */
/*let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/2017blog');
let UserSchema = new mongoose.Schema({
    username:String,
    password:String,//用户模型
    email:String
});
let User = mongoose.model('User',UserSchema);
//把用户模型挂载到导出对象上(mongoose数据库)
exports.User = User;*/

module.exports = {
    User: require('./user'),
    Guest: require('./guest'),
};
