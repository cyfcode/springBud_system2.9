const conn = require('./conn');
const tableName = "user";
module.exports = {
    /**
     * 新增一个用户
     * @param userName
     * @param password
     * @param sort
     * @param business
     * @param callback
     */
    addUser({userName, password,sort,business}, callback){
        let next = function(){
            conn.query(`insert into ${tableName} (username, password, sort, business) values ('${userName}', '${password}', '${sort}', '${business}')`, function (error, results, fields) {
                if(error){
                    callback(error);
                    return;
                }
                callback(null, results.insertId);
            });
        };
        conn.query(`select username from ${tableName} where username='${userName}'`, function(error, result){
            if(error){
                callback(error);
                return;
            }
            if(!result[0]){
                next();
            } else {
                callback({
                    msg: '用户已注册'
                })
            }
        });

    },
    /**
     * 验证用户名与密码是否正确
     * @param userName
     * @param password
     * @param callback
     */
    verify({userName, password}, callback){
        conn.query(`select * from ${tableName} where username='${userName}' and password='${password}'`, function(error, result){
            if(error){
                callback(error);
                return;
            }
            let userInfo = result[0];
            if(userInfo){
                callback(null, userInfo)
            } else {
                callback({
                    msg: '用户名或密码错误'
                });
            }
        });
    },
    /**
     * 设置用户为登录状态
     * @param userId
     * @param callback
     */
    setIsLogin(userId, callback){
        conn.query(`update ${tableName} set status=1 where id=${userId}`, function(error, result){
            if(error){
                callback(error);
            }
        });
    },
    /**
     * 判断是否在其它地方登录
     * @param userName
     * @param callback
     */
    isLogin({userName}, callback){
        conn.query(`select * from ${tableName} where username='${userName}' and status=1`, function(error, result){
            if(error){
                callback(error);
                return;
            }
            if(!result[0]){
                callback(null);
            } else {
                callback(true)
            }
        });
    },
    /*findUser({name_furi,cl_phone,cl_askdate})*/
};
