const mongoose=require("mongoose");
mongoose.set('strictQuery',true);//if strictquery error occurs
async function connectMongoDb(url){
return mongoose.connect(url)
//.then(()=>console.log('Mongo db connected'))
//.catch((error)=>console.log("mongo error",error));
}
module.exports={
    connectMongoDb,
};