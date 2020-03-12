let fs = require("fs");
let conf = require("./config");

let gobal = fs.readdirSync(conf["web_path"]);
let path_Map = new Map();
// console.log(666);
// console.log(gobal);
let controllist = [];
for(let i = 0; i < gobal.length; i++){
  let temp = require("./" + conf["web_path"] +"/" + gobal[i]);
  if(temp.path){
     for (let [k,v] of temp.path) {
         if(path_Map.get(k) == null){
             path_Map.set(k,v)
         }else{
             throw new Error("路径重复:" + path_Map.get(k));
         }
     }
    //  console.log(path_Map); 
  }
  controllist.push(temp);
}

console.log(controllist);

module.exports = path_Map;