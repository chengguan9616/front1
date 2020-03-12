let dbutil = require("./dbutil");
function login (data1,success){
    console.log(data1);
    let connection =  dbutil.createConnect();
    // .createConnect();
    let sql = "select * from student where stu_num=?";
    // where stu_num = "+ data1 +";
    connection.connect();
    connection.query(sql,data1,function(error,result){
        console.log(sql,data1);
        if(error == null){
            let result2 = result[0];
            success(result2);
        }else{
            throw new Error("数据库请求错误" + " " + error);
        }
    });
    connection.end();
}

module.exports = {"login":login };