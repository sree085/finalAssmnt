const mongoose = require("mongoose");
//Write missing code 
mongoose
  .connect(
    'mongodb+srv://sreedevsv085:sree2004@cluster0.wl3i0sp.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
