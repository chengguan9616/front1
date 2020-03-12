let path = new Map();
let url_1 = require("url");
let fs = require("fs");

function getPic (request,response){
     let  params = url_1.parse(request.url,true).query;
    //  let params = url_1.parse(request.url,true).query;
     try {
         let data = fs.readFileSync("./" + params.path);
         response.writeHead(200);
         response.write(data);
         response.end()
     } catch (error) {
         response.writeHead(404);
         response.end();
     } 
}

path.set("/getPic",getPic);

module.exports.path = path;