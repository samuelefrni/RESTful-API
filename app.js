const express = require("express");
const app = express();
const morgan = require("morgan");
const { error404 } = require("./middleware/errorMiddleware");

const productRoute = require("./routes/product/productRoute");
const userRoute = require("./routes/user/userRoute");
const orderRoute = require("./routes/order/orderRoute");

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/product", productRoute);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);
app.use("/", error404);

module.exports = app;
