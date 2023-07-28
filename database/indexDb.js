const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/my_contacts")
  .then(() => console.log("connected to the database"))
  .catch((err) => console.log("Error: " + err.message));
