const express = require("express");
const app = express();
const morgan = require("morgan");

const productRoute = require("./routes/product/productRoute");

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/product", productRoute);

module.exports = app;
