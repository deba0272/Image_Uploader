//USING MVC PATTERN
const express=require("express");
const fs=require("fs");
const {logReqRes,logReqRess}=require("./middleware");
//const mongoose=require("mongoose");
//const users=require("./MOCK_DATA.json");
//const =require("./models/user");
const {connectMongoDb}=require("./connection");
const userRouter=require("./routes/user");

const app=express();//holds reference to the express 
const port=8005;//port name
//Routes
//connect
connectMongoDb("mongodb://127.0.0.1:27017/youtube").then(()=>console.log("Mogodb connected"));//youtube database
//Schema
//Request response cycle
//The "app.use" function is used to mount middleware in the application's middleware stack. It takes a middleware function as an argument.
app.use(express.urlencoded({extended: false}));//Middleware-plugin
//app.use((req,res,next)=>{\
    //fs.appendFile(
       // "log.txt",
        //'\n${Date.now()}: ${req.method}: ${req.path}',
        //(err,data)=>{
        //console.log("hello from middleware 1");
        //return res.json({mgs:"hello from middleware"})
        //next();
        //}
    //);
    //console.log("hello from middleware 1");
    //return res.json({mgs:"hello from middleware"})
    //next();
//});
//app.use((req,res,next)=>{
   // console.log("hello from middleware 2");
//next();
//});
app.use(logReqRes("log.txt"));
app.use(logReqRess());
//routes
app.use('/api/users',userRouter);
app.listen(port,()=>console.log("server started!:${PORT}"));
