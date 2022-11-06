const express = require("express");


const app = express();
app.use(express.json());




app.listen(8500, async () => {
  try {

    console.log("http://localhost:8500")
  }
   catch (error) {
    console.log("Error in Connections",error);
    
  }
});
