const express = require("express");
const route = express.Router();

const {
  postProduct,
  putProduct,
  deleteProduct,
} = require("../../controllers/product/productController");

route.post("/", postProduct);
route.put("/:id", putProduct);
route.delete("/:id", deleteProduct);

module.exports = route;
