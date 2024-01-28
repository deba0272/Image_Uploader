const mongoose=require("mongoose");
//this line creates a Mongoose model named User using the userSchema. A model is a class with which we construct documents. In this case, each document will be an instance of the User model, and it will adhere to the structure defined in the userSchema.
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        resizeBy:3,
        required:true,
        unique:true,
    },
    lastName:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    jobtitle:{
        type:String,
    },
    gender:{
        type:String,
    },
},{
    timestamps:true//shows date and time of the data
});
const User=mongoose.model('use',userSchema);//model
module.exports=
{
    User,
};