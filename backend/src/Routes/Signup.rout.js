const {Router}=require("express")

const SignupRouter=Router()

SignupRouter.post("/",(req,res)=>{

    const {firstname,lastname,age,email,password}=req.body

    

    



})

module.exports={SignupRouter}