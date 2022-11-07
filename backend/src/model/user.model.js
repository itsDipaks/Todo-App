const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true},
password:{type:String,required:true},
// ipaddress:{ipaddress:true}
})

const UserModel=mongoose.model("userdata",UserSchema)

module.exports={UserModel}