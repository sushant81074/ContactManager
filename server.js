const express = require("express");

const app = express();

const contactRouter = require("./routes/contactRoutes");
const userRouter = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorhandler");
require("./database/indexDb");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/contacts", contactRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on Port = ${PORT} `);
});
