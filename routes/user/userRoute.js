const express = require("express");
const route = express.Router();

const {
  postUser,
  putUser,
  deleteUser,
  getUser,
} = require("../../controllers/user/userController");

route.post("/", postUser);
route.put("/:id", putUser);
route.delete("/:id", deleteUser);
route.get("/:id?", getUser);

module.exports = route;
