const mysql = require('mysql');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'cyf962464',
    database : 'guest1.1'
});

connection.connect();

module.exports = connection;