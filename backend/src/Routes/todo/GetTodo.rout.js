const {Router} = require("express");
const {Autheticate} = require("../../middleware/Authenticate");
const {TodoModel} = require("../../model/Todo.model");

const GettodoRouter = Router();

GettodoRouter.get("/", Autheticate, async(req, res) => {
  const {userid} = req.body;

  const todos =await TodoModel.find({userid});
console.log(todos)
res.send("data")
});

module.exports = {GettodoRouter};
