const mongoose=require("mongoose")

const TodoSchema=mongoose.Schema({
    taskname:{type:String,required:true},
    status:{type:String,required:true,enum:["Done","pending"], default:"pending"},
    tag:{type:String,required:true,enum:["personal","official","family"], default:"personal"},
    userid:{type:String,required:true}
})
const TodoModel=new mongoose.model("todo",TodoSchema)

module.exports={TodoModel}