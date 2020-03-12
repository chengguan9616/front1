let fs = require("fs");
let conf = fs.readFileSync("./serve.conf");


let list = conf.toString().split("\r\n");
// console.log(list);
let obj_path = {};

for(let i = 0; i < list.length;i++){
    obj_path[list[i].split("=")[0]] = list[i].split("=")[1];
}

// console.log(obj_path);

module.exports = obj_path;