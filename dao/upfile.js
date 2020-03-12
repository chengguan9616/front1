let createConnect_func = require("./dbutil");
// let connection  = createConnect_func.createConnect();


function upfile (num,success){
    let querysql = "insert into uploadlist (`mimetype`,`originalname`,`path`,`filename`,`id`) values(?,?,?,?,?);";
    let connection = createConnect_func.createConnect();
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

module.exports = {
    "upfile":upfile
}