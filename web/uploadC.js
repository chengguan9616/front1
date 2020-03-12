let path = new Map();
let upload_mysql = require("../dao/upfile");

function upload (request,response){
    console.log("上传...");
    let id = request.cookies.id + new Date().getTime();
    // `mimetype`,`originalname`,`path`,`filename`,`id`
    let list = [request.file.mimetype,request.file.originalname,request.file.path,request.file.filename,id];
    console.log(request.file.mimetype);
    upload_mysql.upfile(list,(data)=>{
        console.log("上传至数据库" + data);
        response.write(request.file.path);
        response.end();
    })
    console.log(request.file);
    // console.log(request.file.originalname);
    // console.log(request.file.size);
    // console.log(request.file.path);
    // response.end("finish");
}
path.set("/upload",upload);

module.exports.path = path;