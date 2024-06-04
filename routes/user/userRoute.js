const express = require("express");
const route = express.Router();

const {
  postUser,
  putUser,
  deleteUser,
} = require("../../controllers/user/userController");

route.post("/", postUser);
route.put("/:id", putUser);
route.delete("/:id", deleteUser);

module.exports = route;
