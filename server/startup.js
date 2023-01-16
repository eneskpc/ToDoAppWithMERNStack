const express = require("express");
const todosRoute = require("./routes/todos");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/v1/todos", todosRoute);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_DB_CONNECTION)
  .then(() => {
    app.listen(process.env.PORT, () => console.log("API is started"));
  })
  .catch((err) => {
    console.log(err);
  });
