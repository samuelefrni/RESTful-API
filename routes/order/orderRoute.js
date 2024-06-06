const express = require("express");
const route = express.Router();

const {
  postOrder,
  putOrder,
  deleteOrder,
  getOrder,
  getOrderById,
} = require("../../controllers/order/orderController");

route.post("/", postOrder);
route.put("/:id", putOrder);
route.delete("/:id", deleteOrder);
route.get("/", getOrder);
route.get("/:id", getOrderById);

module.exports = route;
