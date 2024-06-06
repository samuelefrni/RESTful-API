const express = require("express");
const route = express.Router();

const {
  postProduct,
  putProduct,
  deleteProduct,
  getProduct,
} = require("../../controllers/product/productController");

route.post("/", postProduct);
route.put("/:id", putProduct);
route.delete("/:id", deleteProduct);
route.get("/:id?", getProduct);

module.exports = route;
