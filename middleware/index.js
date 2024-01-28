//Here two middlewares used:
const fs=require('fs');
function logReqRes(filename){
    return(req,res,next)=>{
        fs.appendFile(
            filename,
            '\n${Date.now()}: ${req.method}: ${req.path}',
            (err,data)=>{
            console.log("hello from middleware 1");
            //return res.json({mgs:"hello from middleware"})
            next();
            }
        );
    };
}
function logReqRess(){
    return(req,res,next)=>{
       console.log("hello from middleware 2");
        next();
    };
}
module.exports={
    logReqRes,
    logReqRess,
};
