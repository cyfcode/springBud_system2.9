//客户信息录入
const conn = require('./conn');
const tableName = "user_internet";
module.exports = {
    /*
    * 客户信息录入*/
    inputUser({internet_type,
                  name_furi,
                  name_kan,
                  birthday,
                  sex,
                  mo_tel,
                  zip_code,
                  address,
                  guest_from,
                  present,
                  worker,
                  memo,
                  cl_askdate}, callback){
        let next = function(){
            conn.query(`insert into ${tableName} (
                  internet_type,
                  name_furi,
                  name_kan,
                  birthday,
                  sex,
                  mo_tel,
                  zip_code,
                  address,
                  guest_from,
                  present,
                  worker,
                  memo,
                  cl_askdate) values (
                  '${internet_type}', 
                  '${name_furi}',
                  '${name_kan}',
                  '${birthday}',
                  '${sex}',
                  '${mo_tel}',
                  '${zip_code}',
                  '${address}',
                  '${guest_from}',
                  '${present}',
                  '${worker}',
                  '${memo}',
                  '${cl_askdate}')`,
                function (error, results, fields) {
                if(error) throw error;
            });
        };
        next();
    },
    /*
    * 客户信息查找*/
    selectUser({
                   name_furi,
                   name_kan,
                   mo_tel,
                   address,
                   cl_askdate
               }, callback) {
        let next = function () {
            conn.query(`select name_furi,
                  name_kan,
                  mo_tel,
                  address,cl_askdate from ${tableName} values (
                  '${name_furi}'
                  '${name_kan}',
                  '${mo_tel}',
                  '${address}',
                  '${cl_askdate}')`,
                function (error, results, fields) {
                    if (error) throw error;
                    else{
                        console.log(results);
                    }

                });
        };
        next();
    },
    /*
    * 客户信息显示*/
    showUser({order_id, internet_type, name_furi, mo_tel, birthday},callback){
        let next = function () {
            conn.query(`select * from ${tableName} (
                  order_id,
                  internet_type,
                  name_furi,
                  mo_tel,
                  birthday) values (
                  '${order_id}',
                  '${internet_type}',
                  '${name_furi}',
                  '${mo_tel}',
                  '${birthday}')`,
                function (error, results, fields) {
                    if(error) throw error;
                    else{
                        console.log(results);
                        order_id.forEach(function (item,index) {

                        })
                    }
                });
        };
        next();
    }
};
