const mysql=require('mysql');
const {promisify}=require('util');
var pool=mysql.createPool({
host:'localhost',
    user:'root',
    password:'',
    database:'credencial'
});

pool.getConnection((err,connection)=>{
    if (err) console.log('erro db');
    if (connection){
        connection.release();
        console.log('conection bd')
    }
    return;
});
pool.query=promisify(pool.query);
module.exports=pool;
