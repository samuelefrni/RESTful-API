const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { errorMiddleware404, error } = require("./middleware/errorMiddleware");

app.use(express.json());
app.use(morgan("dev"));

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected with MongoDB");
  })
  .catch((error) => {
    console.error(error);
  });

app.use("/:uri", errorMiddleware404);

module.exports = app;
