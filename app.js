var bodyparser=require("body-parser");
var express=require("express");
var app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.listen(3000,function(req,res){
    print("Please listen to the port");
})
app.get("/",function(req,res){
   res.render("Index");
});
