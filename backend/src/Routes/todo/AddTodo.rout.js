const {Router} = require("express");
const { Autheticate } = require("../../middleware/Authenticate");
const {TodoModel} = require("../../model/Todo.model");

const AddtodoRouter = Router();

AddtodoRouter.post("/", Autheticate, async (req, res) => {
  const {taskname, status, tag, userid} = req.body;
  try {
    const todo = new TodoModel({
      taskname,
      status,
      tag,
      userid,
    });
    await todo.save();
    
    res.send({msg: "Todo Addeed Sucessfully"});
  } catch {
    res.send({msg: "plase try again some time"});
  }
});

module.exports = {AddtodoRouter};
