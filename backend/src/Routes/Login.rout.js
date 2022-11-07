const {Router} = require("express");
const {UserModel} = require("../model/User.model");
var jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

const LoginRouter = Router();

LoginRouter.post("/", async (req, res) => {
  const {email, password} = req.body;
  const isSignup = await UserModel.findOne({email});
  if (isSignup) {
    const hashedpassword = isSignup.password;
    const userid = isSignup._id;
    bcrypt.compare(password, hashedpassword).then(function (result) {
      if (result) {
        var token = jwt.sign({userid}, process.env.PRIVATE_KEY);
        res.send({msg: "Login Sucessfull", token: token});
      } else {
        res.send("Login Faild");
      }
      
    });
  } else {
    res.send("Wrong Credential Please Signup First");
  }
});

module.exports = {LoginRouter};
