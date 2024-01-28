const User=require("../models/user");
async function handleGetAllUsers(req,res){
    const allDbusers=await User.find({});
return res.json(allDbusers);
}
async function getUserById(req,res){
    const user=await User.findById(req.params.id);//finding by id
    if(!user)
    return res.status(404).json({status:"not found"});
    return res.json(user);
}
async function updateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{ lastName : 'Changed'});
    return res.json({status:"Success"});
}
async function deleteUserById(req,res){
       //delete the user
       await User.deleteOne(req.params.id);
       return res.json({status:"pending"});
}
async function createUserById(req,res){
    const body=req.body;
    //all files not send
    if(!body || !body.first_name)
    return res.status(400).json({status:"All file not send"});
    //users.push({...body,id: users.length + 1});
    //fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
      //  return res.status(201).json({status:"success",id:users.length});
      const result = await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobtitle:body.job_title,
      });
      console.log(result);
      return res.status(201).json({msg:"successs"});
}
module.exports={
    handleGetAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    createUserById,
};