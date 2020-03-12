let connection_func = require("./dbutil");
console.log(connection_func);
function selectschool (success){
    let querysql = "select * from student";
    let connection = connection_func.createConnect();
    connection.connect();
    connection.query(querysql,function(error,data){
        if(data){
            // console.log(data);
            let result = "";
            for(let i = 0; i < data.length;i++){
                // console.log(i);
                result += data[i].name;
            }
            console.log(result); 
            success(result);
        }else{
            console.log(error);
        }
    })
    connection.end();
}

function insertData (params,success){
    let querysql = "insert into student (`stu_num`,`name`,`age`,`class`,`pwd`) values(?,?,?,?,?);";
    let connection = connection_func.createConnect();
    console.log(params);
    let listvalue = [params["stu_num"],params["name"],params["age"],params["class"],params["pwd"]];
    console.log(listvalue);
    connection.connect();
    connection.query(querysql,listvalue,function(error,data){
        if(data){
            // console.log(data);
            let result = "";
            for(let i = 0; i < data.length;i++){
                // console.log(i);
                result += data[i].name;
            }
            console.log(result); 
            success(result);
        }else{
            console.log(error);
        }
    })
    connection.end();
}

function selectPost (num,success){
    let querysql = "select * from student where stu_num=?;";
    let connection = connection_func.createConnect();
    connection.connect();
    connection.query(querysql,num,function(error,data){
        if(data){
            console.log(data);
            let result = "";
            for(let i = 0; i < data.length;i++){
                // console.log(i);
                result += data[i].name;
            }
            console.log(result); 
            success(data[0]);
        }else{
            console.log(error);
        }
    })
    connection.end();
}
module.exports = { "selectschool" : selectschool,
                    "insertData" : insertData,
                    "selectPost" : selectPost   
 
}