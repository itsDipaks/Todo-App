const {Router} = require("express");
const {UserModel} = require("../model/User.model");
const bcrypt = require("bcrypt");
const SignupRouter = Router();

SignupRouter.post("/",async (req, res) => {
  const {name, email, password} = req.body;
  const isPresent =await UserModel.findOne({email});
  if (isPresent) {
    res.send("User Already Exist Please Login");
  } else {
  bcrypt.hash(password, 4,async function(err, hashpassword) {
   if(err){
    res.send({msg:"Something Wents Wrong With Password",err:err})
   }else{
        const saveuser = new UserModel({
          name,
          email,
          password: hashpassword,
        });
        await saveuser.save();
        res.send({msg: "User Created Sucessfully"});
    }
    });
  }
});

module.exports={SignupRouter}