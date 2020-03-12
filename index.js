let express = require("express");
let config = require("./config");
let cookie = require("cookie-parser");
let load = require("./load");
let multer = require("multer");
let app = new express();
let upload = multer({dest:"./file/"});

app.use(cookie());
app.use(express.static(config.page_path));
app.get("/api/*",function(require,response,next){
    if(require.cookies.id){
        next();
    }else{
        response.redirect("/login.html");
    }

})
app.post("/upload",upload.single("file"),load.get("/upload"));
app.post("/login",load.get("/login"));
app.get("/api/getData",load.get("/getData"));
app.get("/api/insertData",load.get("/insertData"));
app.get("/getPic",load.get("/getPic"));
app.listen(config.port);