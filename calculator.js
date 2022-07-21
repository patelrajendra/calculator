const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app. get("/",function(req,res){
  res.sendFile(__dirname+ "/index.html");
});
app.post("/",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send("The result is:" +result);
});
app.get("/minus",function(req,res){
    res.sendFile(__dirname+ "/index.html");
});
app.post("/minus",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1-num2;
    res.send("The result is:" +result);
});
app.get("/multiply",function(req,res){
    res.sendFile(__dirname+ "/index.html");
});
app.post("/multiply",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1*num2;
    res.send("The result is:" +result);
});
app.get("/divide",function(req,res){
    res.sendFile(__dirname+ "/index.html");
});
app.post("/divide",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1/num2;
    res.send("The result is:" +result);
});
app.listen(5033,function(){
    console.log("Server is running");
});