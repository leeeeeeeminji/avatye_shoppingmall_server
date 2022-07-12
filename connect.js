//mysql 연결
const mysql = require('mysql')

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'shoppingmall'
})

module.exports = db;