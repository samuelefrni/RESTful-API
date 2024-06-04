const express = require("express");
const app = express();
const morgan = require("morgan");

const productRoute = require("./routes/product/productRoute");
const userRoute = require("./routes/user/userRoute");

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/product", productRoute);
app.use("/api/user", userRoute);

module.exports = app;
