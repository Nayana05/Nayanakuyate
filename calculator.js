const express = required("express");
const app = express();
app.get("/",function(req,res){
    res.send("<h1>Hellow World</h1>");
});
app.get("/about",function(req,res){
    res.send("<h1>Nayana Kuyate</h1><p>This is very hard to understand</p>");
});
app.get("/shapeai",function(req,res){
    res.send("<h1>shapeai</h1><p>This is very hard to understand</p>");
});
app.listen(3000,function(){
    console.log("Server has started on port 3000");
});