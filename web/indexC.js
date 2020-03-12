
let schoolserve = require("../dao/schoolserve");
let path = new Map();
let url_1 = require("url");
function getData (request,response){
    // console.log("indexC");
    // response.writeHead(200);
    // response.write("hello ");
    // response.end();
    console.log("触发service里的函数");
    schoolserve.selectschool((data)=>{
        response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        response.write(JSON.stringify(data));
        response.end();
    })
    
}



function favicon (request,require){
    require.write("好");
}

function login (request,response){
    // let params = url_1.parse(request.url,true).query;
    // 获取get请求时的params
    // 获取post传过来的参数params
    console.log("login");
    request.on("data",function(data){
        let params = {
            "stu_Num":data.toString().split("&")[0].split("=")[1],
            "password":data.toString().split("&")[1].split("=")[1]  
        };
        console.log("获取ajax传来的参数"); 
        // console.log(params);
        console.log(params["stu_Num"]);
        schoolserve.selectPost(params.stu_Num,(result)=>{
           if(result.pwd && params.password == result.pwd){
                console.log("登录结果:"  );
                console.log(result);
                // response.writeHead(200);
                // response.write("登录成功");
                // response.write(JSON.stringify(true));
                // response.writeHead(302,{"location":"./index.html","Set-cookie":"id=" + true});
                response.cookie("id",result.id);
                // response.writeHead(200,{"location":"./index.html"});
                response.redirect("/index.html");
                response.end(); 
           }else{
                response.writeHead(200);
                response.write("登录不成功，账号不存在");
                response.end();
           }
        })    

    })
    // 获取post
 
    // console.log(query.stu_Num);
}

function insertData (request,response){
    console.log("加数据");
    let params = url_1.parse(request.url,true).query;
    // console.log(params);
    schoolserve.insertData(params,(data)=>{
         
           response.writeHead(200,{"Content-type":"text/html;charset:utf-8"})
           response.write("添加成功");
           response.end();
         
    })
}
path.set("/insertData",insertData);
path.set("/favicon.ico",favicon);
path.set("/getData",getData);
path.set("/login",login);


module.exports.path = path;


