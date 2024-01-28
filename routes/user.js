const express=require("express");
const {handleGetAllUsers,getUserById,updateUserById,deleteUserById,createUserById}=require("../controllers/user");//passing functions(controller)
const router=express.Router();


//router.get('/api',async (req,res)=>{
   // const allDbusers=await User.find({});
   // res.setHeader("X-MyName","Debajyoti");//custom header
   
    //always add X to custom headers
   /// return res.json(allDbusers);
//});
router
.route("/")
.get(handleGetAllUsers)
.post(createUserById);
router
.route('/:id')
.get(getUserById)
.patch(updateUserById)
.delete(deleteUserById);
    //console.log("Body",body);
    //return res.json({status:"pending"});
    module.exports=
    {
      router,
    };