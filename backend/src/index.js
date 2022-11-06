const express = require("express");
const { connect } = require("./config/db");


const app = express();
app.use(express.json());




app.listen(8500, async () => {
  try {

await connect
    console.log("http://localhost:8500")
  }
  
   catch (error) {
    console.log("Error in Connections",error);

    


  }
});
