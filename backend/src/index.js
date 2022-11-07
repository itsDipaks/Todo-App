const express=require("express")
const { connect } = require("./config/db")
const { LoginRouter } = require("./Routes/Login.rout")
const { SignupRouter } = require("./Routes/Signup.rout")
const { AddtodoRouter } = require("./Routes/todo/AddTodo.rout")
const { GettodoRouter } = require("./Routes/todo/GetTodo.rout")
var cors = require('cors')
const app=express()
const PORT=process.env.PORT

app.use(express.json())
app.use(cors())
app.use("/signup",SignupRouter)
app.use("/login",LoginRouter)

app.use("/addtodo",AddtodoRouter)
app.use("/gettodo",GettodoRouter)


app.listen(PORT,async()=>{
  try{
await connect
    console.log("server started at http://localhost:8600")
  }catch{
console.log("there is some problem with connections")
  }
})