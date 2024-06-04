require("dotenv").config();
const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGODB, { family: 4 })
  .then(() => {
    console.log("MongoDB connected");
    server.listen(process.env.PORT, () => {
      console.log(`Server running on localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
