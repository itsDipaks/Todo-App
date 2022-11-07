var jwt = require("jsonwebtoken");
require("dotenv").config();

const Autheticate = (req, res, next) => {
  const token = req.headers.token;

  if (token) {
    jwt.verify(token, process.env.PRIVATE_KEY, function (err, decoded) {
      if (decoded) {
        const userid = decoded.userid;
        req.body.userid = userid;
        next();
      } else {
        res.send(err);
      }
    });
  } else {
    res.send("Authenticaion Faild please Provide Token");
  }
};

module.exports = {Autheticate};
