let mysql = require("mysql");

function createConnect (){
    let connection = mysql.createConnection({
        host:"127.0.0.1",
        port:"3306",
        user:"root",
        password:"19971001SFR",
        database:"school"
    })
    return connection;
}
let connection = mysql.createConnection({
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    password:"19971001SFR",
    database:"school"
})

module.exports.createConnect = createConnect;